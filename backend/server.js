import express from "express";
import bodyParser from "body-parser";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import db from "./models";
import apiTravel from "./api/travel";
import apiPerson from "./api/person";
import apiLocation from "./api/location";

const swaggerJSDoc = require('swagger-jsdoc');
const app = express();
app.use(bodyParser.json());

apiTravel(app, db);
apiPerson(app, db);
apiLocation(app, db);
db.sequelize.sync().then(() => {
  db.location.bulkCreate(
    [
      {name: 'Melbourne Airport', nominatimId: 146327231, latitude: -37.667111, longitude: 144.833480766796, type: 'Airport'},
      {name: 'Royal Yacht Club Of Victoria', nominatimId: 17535999, latitude: -37.8606788, longitude: 144.9072672, type: 'Marina'},
      {name: 'Royal Yacht Club Of Tasmania', nominatimId: 170109287, latitude: -42.89777645, longitude: 147.332481183092, type: 'Marina'}
    ]
  );
  db.person.bulkCreate(
    times(10, () => ({
      Name: faker.name.findName()
    }))
  );
  // populate travel table with dummy data
  db.travel.bulkCreate(
    times(10, () => ({
      personId: random(1, 10),
      departureLocation: random(1,3),
      arrivalLocation: random(1,3)
    }))
  );
  /**
   * Swagger
   */
  const definition = {
    info: {
      title: 'Footprint API',
      version: '1.0.0',
      description: 'API for calculating your Carbon footprint',
    },
    basePath: '/',
  };
  const options = {
    definition,
    apis: ['./api/*.js']
  }
  const swaggerUi = require('swagger-ui-express');
  const swaggerSpec = swaggerJSDoc(options);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.listen(8080, () => console.log("Api listening on port 8080"));
});