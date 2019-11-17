process.env.NODE_ENV = 'test';
import db from "./models";

describe('testing models', function () {
  before(function (done) {
    db.sequelize.sync().then(() => {
      return done();
    });
  });

  it('should create locations', function (done) {

    db.location.bulkCreate(
      [
        { name: 'Melbourne Airport', nominatimId: 146327231, latitude: -37.667111, longitude: 144.833480766796, type: 'Airport' },
        { name: 'Royal Yacht Club Of Victoria', nominatimId: 17535999, latitude: -37.8606788, longitude: 144.9072672, type: 'Marina' },
        { name: 'Royal Yacht Club Of Tasmania', nominatimId: 170109287, latitude: -42.89777645, longitude: 147.332481183092, type: 'Marina' },
        { name: 'Sydney Airport', nominatimId: 125329460, latitude: -33.9498935, longitude: 151.18196819346, type: 'Airport' },
        { name: 'Vught', nominatimId: 51682493, latitude: 51.6555908, longitude: 5.2921212, type: 'Train Station' },
        { name: 'Verkadefabriek', nominatimId: 138795946, latitude: 51.6957923, longitude: 5.29779645210143, type: 'Venue' },
        { name: '\'s-Hertogenbosch', nominatimId: 51855309, latitude: 51.6957923, longitude: 5.29779645210143, type: 'Train Station' },
        { name: 'Beukenlaan 2, Vught', nominatimId: 31558327, latitude: 51.6338126, longitude: 5.3001494, type: 'Address' }
      ]
    ).then(function (trip) {
      // do some tests on article here
      done();
    });
  });

  it('should create persons', function (done) {

    db.person.bulkCreate(
      [
        { name: 'Alvaro' },
        { name: 'Milo' }
      ]
    ).then(function (trip) {
      // do some tests on article here
      done();
    });
  });

  it('should create journeys', function (done) {
    db.journey.bulkCreate(
      [
        { personId: 1, description: "Sailing involved" },
        { personId: 1, description: "Fly from here to there" },
        { personId: 2, description: "AI met Impact meeting" }
      ]
    ).then(function (trip) {
      // do some tests on article here
      done();
    });
  });

  it('should create travels', function (done) {
    db.travel.bulkCreate(
      [
        { oneway: true, departedAt: "2019-01-12", arrivedAt: "2019-01-22", transport: 'Boat', journeyId: 1, departureLocation: 3, arrivalLocation: 2 },
        { oneway: false, departedAt: "2019-01-02", arrivedAt: "2019-01-04", transport: 'Plane', journeyId: 2, departureLocation: 1, arrivalLocation: 4 },
        { oneway: true, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 0, transport: 'Car', journeyId: 3, departureLocation: 8, arrivalLocation: 5 },
        { oneway: true, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 1, transport: 'Train', journeyId: 3, departureLocation: 5, arrivalLocation: 7 },
        { oneway: false, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 2, transport: 'Foot', journeyId: 3, departureLocation: 7, arrivalLocation: 6 },
        { oneway: true, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 3, transport: 'Train', journeyId: 3, departureLocation: 7, arrivalLocation: 5 },
        { oneway: true, departedAt: "2019-10-31", arrivedAt: "2019-10-31", sequence: 4, transport: 'Car', journeyId: 3, departureLocation: 5, arrivalLocation: 8 }
      ]
    ).then(function (trip) {
      // do some tests on article here
      done();
    });
  });

});