* This is demo application for weather service build using nest.js, typescript, mongodb. 
* Can be run alone or within docker

* Follow these steps below to make sure the application running in the correct way

- Run the command `npm i` to install all the application dependencies
- Modify `.env.example` file to `.env` and config the corresponding information into `.env` file
- Run the command `npm run migration` to migrate all tables into the database
- Run the command `npm run format` to format all coding styles
- Run the command `npm run lint` to checking the coding convention are strictly
- To start the application rely on the NestJS Framework CLI, let following to those commands shows below:
  + Run the command `npm run start:dev` to starting development the application
  + Run the command `npm run start:prod` to starting production the application
  + Run the command `npm run build` to build the application
- To start the application and run in the clusters, let following to those commands shows below:
  + Run the command `npm run build:dev` to starting development the application
  + Run the command `npm run build:prod` to starting production the application 
