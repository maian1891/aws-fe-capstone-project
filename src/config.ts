require('dotenv').config()

// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
export const apiEndpoint = process.env.REACT_APP_API_ENDPOINT
console.log(`api: ${process.env.REACT_APP_API}`)
console.log(`apiEndpoint: ${apiEndpoint}`)

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: process.env.REACT_APP_DOMAIN,            // Auth0 domain
  clientId: process.env.REACT_APP_CLIENTID,          // Auth0 client id
  callbackUrl: process.env.REACT_APP_CALLBACKURL
}
