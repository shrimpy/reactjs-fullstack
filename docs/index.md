# Reactjs Fullstack
- Project setup include both client and server

# Technology
- Lerna
- Reactjs
- Webpack
- Typescript
- Expressjs
- yarn

# Folder structure
```
/---
   |
   |------- packages
              |
              |-------- client (reactjs application)
              |           
              |-------- Server (Expressjs)
   
```

# Commands
### Init
```
yarn
```
- install lerna

### Build
```
yarn build
```
- produce build artifact to deploy to production
    - ensure dependencies are installed
    - build client project
    - build server project
    - copy client assets into server's public folder

### Local development environment
```
yarn start
```
- Create local development environment
    - ensure dependencies are installed
    - start client project with hot reload
    - start server project with hot reload
    - auto open browser
