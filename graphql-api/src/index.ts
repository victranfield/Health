import { bootstrap } from 'vesper';
import "reflect-metadata";
import { PointsController } from './controller/PointsController';
import { Points } from './entity/Points';
import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-iso-date';
import {createConnection} from "typeorm";
import {User} from "./entity/User";

bootstrap({
    port: 4000,
    controllers: [
      PointsController
    ],
    entities: [
      Points,
      User
    ],
    customResolvers: {
      Date: GraphQLDate,
      Time: GraphQLTime,
      DateTime: GraphQLDateTime
    },
    schemas: [
      __dirname + '/schema/**/*.graphql'
    ],
    cors: true
  }).then(() => {
    console.log('Your app is up and running on http://localhost:4000. ' +
      'You can use playground in development mode on http://localhost:4000/playground');
  }).catch(error => {
    console.error(error.stack ? error.stack : error);
  });


//   createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);
    
//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);
     
//     console.log("Here you can setup and run express/koa/any other framework.");
    
// }).catch(error => console.log(error));