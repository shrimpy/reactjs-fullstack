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
              |-------- client (Reactjs application)
              |           
              |-------- server (Expressjs)
   
```

# Commands
### Init
```
yarn
```
- install lerna

### Local development environment
```
yarn dev
```
- Create local development environment
    - ensure dependencies are installed
    - start client project with hot reload
    - start server project with hot reload
    - auto open browser

### Release Build
```
yarn build
```
- produce build artifact to deploy to production
    - ensure dependencies are installed
    - build client project
    - build server project
    - copy client assets into server's public folder

### Deploy to heroku
```
yarn build
heroku buildpacks:clear
heroku buildpacks:add heroku/nodejs 
# Keep devDependencies so that lerna will work
heroku config:set NPM_CONFIG_PRODUCTION=false
git push heroku master
```
