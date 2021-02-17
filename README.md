## Music Application (skyBEAT)

skyBEAT is a music application where you can go around thousands of tracks and many more. skyBEAT is build on React along with Redux and underneath it make use of spotify API’s.
#### Live Link
https://skybeatpro.netlify.app/

## Features

• Login Implementation 

• Search tracks, album, playlist 

• Create Playlist 

• Recently Played  

• User Library 

• Editor’s Picks 

• New Release

• Category Playlist suggestion according to day and night. 


## Scopes for Authentication

• User-read-recently-played 

• user-top-read, 

• playlist-modify-public, 

• playlist-modify-private 

• playlist-read-private, 

• User-read-private, 

• user-read-email, 

• User-library-read, 

• user-library-modify,    

• user-follow-read,

## Packages for build this application: 

• React-Redux 

• Redux  

• Redux-logger 

• Redux-promise 

• Material UI core and icons 

• React Bootstrap 

• React Dom 

• React Router Dom 

• React Loader Spinner 

## Prerequisite:
• To make application you need to have spotify dashboard which will give you client_id and client_secret.
```
 https://developer.spotify.com/dashboard/
 ```
• After Creating dashboard , add redirect uri (local host or any other deployed project link).

## Build Setup

```
• npm install

• In src/config/spotify.json give your client ID and client Secret 

• npm start

Note
• Application run on spotify web API where all API requires an oAuth for fetching the data.

• Application can be access after the authorization.
```