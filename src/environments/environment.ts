// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config : {
      apiKey: "AIzaSyDoQ4YtFjq-WtUp6AeHSKPHuGHE6Z-isZs",
      authDomain: "ecommerce-83851.firebaseapp.com",
      projectId: "ecommerce-83851",
      storageBucket: "ecommerce-83851.appspot.com",
      messagingSenderId: "162661026563",
      appId: "1:162661026563:web:515fe55a8d1c65822c3736"
    }

  },
  actionCodeSettings: {
    url: 'http://localhost:5200/demo',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
