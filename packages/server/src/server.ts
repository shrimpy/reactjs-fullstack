import os from "os";
import cluster from "cluster";
import * as http from "http";

import app from "./app";
const port = process.env.PORT || 8000;

const newWebServer = () => {
    const server = http.createServer(app);
    server.listen(port);

    server.on("error", (error: NodeJS.ErrnoException) => {
        if (error.syscall !== "listen") throw error;
        const bind = (typeof port === "string") ? "Pipe " + port : "Port " + port;
        switch (error.code) {
            case "EACCES":
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    });

    server.on("listening", () => {
        const addr = server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr!.port}`;
        console.log(`Listening on ${bind} and worker ${process.pid}`);
    });
};


const clusterWorkerSize = os.cpus().length;

const main = async () => {
    if (clusterWorkerSize === 1) {
        newWebServer()
    } else {
        if (cluster.isMaster) {
            for (let i = 0; i < clusterWorkerSize; i++) {
                cluster.fork();
            }

            cluster.on("exit", (worker) => {
                console.log(`Worker ${worker.id} has exited.`)
            });
        } else {
            newWebServer()
        }
    }
};

main();