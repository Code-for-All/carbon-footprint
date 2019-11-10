export const environment = {
  production: false,
  API_BASE_PATH: 'http://localhost:8080',
  auth: {
    domain: "{yourdomain}.auth0.com",
    client_id: "{YourClientID}",
    audience: `{YourAudience}`
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
