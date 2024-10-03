# Setting up the project

### Firebase Connection

1. Set up a firebase project, then copy the project connection into the .env
2. Initialize, firestore, firebase auth, firebase storage and hosting in the firebase dashboard. (this can also be done by running: firebase init in the cli)

### ANALYTICS

1. Enable analytics in firebase project then go to the analytics $Dashboard.
2. In the search bar type "property id" and add the id to your .env
3. To get the application credentials go to
   [text](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries)
4. Download the json key file and include in the root of the project and rename it "analytics_key.json".
5. Inside the .json you will find a client email.
6. With the client email go to https://analytics.google.com/analytics/web/?authuser=0&hl=en#/a321623725p457551229/admin/suiteusermanagement/property and add the email to the property access.
7. Remember to deploy a live app with the google tag to get data from the api.

### Stripe

1.

#### Testing

      stripe listen --forward-to localhost:3000/api/stripe/webhook

### Deployment

1. Add project name to the firebase.json.hosting.site
2. Run: npm run build -- --preset=firebase
3. Run: firebase deploy
