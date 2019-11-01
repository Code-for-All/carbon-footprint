import express from "express";
import bodyParser from "body-parser";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import db from "./models";
import apiTravel from "./api/travel";
import apiPerson from "./api/person";

const app = express();
app.use(bodyParser.json());

apiTravel(app, db);
apiPerson(app, db);

db.sequelize.sync().then(() => {
  db.person.bulkCreate(
    times(10, () => ({
      Name: faker.name.findName()
    }))
  );
  // populate post table with dummy data
  db.travel.bulkCreate(
    times(10, () => ({
      Description: faker.lorem.sentence(),
      personId: random(1, 10)
    }))
  );
  app.listen(8080, () => console.log("Api listening on port 8080"));
});