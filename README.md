# Carbon Footprint

Based upon the [Let's talk about gas](https://blog.codeforaustralia.org/lets-talk-about-gas-47243900bd7d) blog by Code For Australia.

* This app consists of a backend written in nodejs/express/sequelize that provides an API for the frontend
* The frontend is an angular app

# Getting started

This application uses [auth0](https://auth0.com/) you can sign up for a free account. The credentials for auth0 should be used to facilitate users to authenticate with Carbon footprint. Our application uses the basic "flow" as described by auth0 in the [documentation](https://auth0.com/docs/quickstart/spa/angular2)

Before the components can be run, you have to create __configuration files__ for both the frontend and the backend:


## Frontend configurations
Create a file in `frontend/src/environments/` called `environment.ts` by either renaming `environment.example.ts` or creating a new file named `environment.ts` with the following content:
```
export const environment = {
  production: false,
  API_BASE_PATH: 'http://localhost:8080',
  auth: {
    domain: "{yourdomain}.auth0.com",
    client_id: "{YourClientID}",
    audience: `{YourAudience}`
  }
};
```

## Backend configurations
Create a file in `backend/config/` called `config.json` by either renaming `config.example.json` or creating a new file named `config.json` with the following content:

```
{
  "development": {
    "database": "./data/database_development.sqlite",
    "dialect": "sqlite",
    "auth": {
      "audience": "{YOUR-API-AUDIENCE-ATTRIBUTE}",
      "domain": "{YOUR-AUTH0-DOMAIN}"
    }
  },
  "test": {
    "database": "./data/database_test.sqlite",
    "dialect": "sqlite",
    "auth": {
      "audience": "{YOUR-API-AUDIENCE-ATTRIBUTE}",
      "domain": "{YOUR-AUTH0-DOMAIN}"
    }
  },
  "production": {
    "database": "./data/database_production.sqlite",
    "dialect": "sqlite",
    "auth": {
      "audience": "{YOUR-API-AUDIENCE-ATTRIBUTE}",
      "domain": "{YOUR-AUTH0-DOMAIN}"
    }
  }
}
```

## Starting in Development mode

Traverse into either the backend or frontend directory

```
npm i
npm start
```

**Please be aware that this App is work in progress**

