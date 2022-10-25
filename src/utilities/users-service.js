// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as usersAPI from './users-api';


export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  // Baby step by returning whatever is sent back by the server
  localStorage.setItem('token', token);
 // return token;
  return getUser();
 // Persist the "token"
//  localStorage.setItem('token', token);
//  // Update the following line of code
//  return getUser();
}

export async function login(userData) {
  const response = await usersAPI.login(userData);
  localStorage.setItem('token', response.jwt_token)

  return getUser();
}

// export function logOut() {
//   localStorage.removeItem('token');
//   }

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem('token');
    return null;
  }
  return token;
  }
  
  export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }







// import * as usersAPI from './users-api';

// //-------
// // getToken
// //-------

// // This function takes the token from local storage and checks if it exists first. Then, it parses the token and decodes it in the browser, checking if it is expired yet. Finally, if those two checks pass, it sends the token to the next function.

// export function getToken() {
//   const token = localStorage.getItem('token')
//   if (!token) return null;

//   const payload = JSON.parse(atob(token.split('.')[1]));

//   if (payload.exp < Date.now() / 1000) {
//     localStorage.removeItem('token');
//     return null
//   }
//   return token;
// }

// //-------
// // getUser
// //-------

// // This function takes the token from the previous function, parses the data from it, and (if the data exists) sends it on to the next function.

// export function getUser() {
//   const token = getToken();
//   return token ? JSON.parse(atob(token.split('.')[1])).user : null
// }

// //-------
// // Register
// //-------

// // This function grabs the token from the API, sets it to a key of 'token' in localStorage, and then runs getUser to grab the information from it and send it to our webpage.

// export async function register(userData) {
//   const response = await usersAPI.register(userData);
//   localStorage.setItem('token', response.jwt_token)
//   return getUser();
// }

// //-------
// // Log In
// //-------

// export async function logIn(userData) {
//   const response = await usersAPI.logIn(userData);
//   localStorage.setItem('token', response.jwt_token)
//   return getUser();
// }

// //-------
// // Get Trips
// //-------

// export async function getTrips() {
//   const response = await usersAPI.getTrips();
//   return response;
// }