## Description

Secure GraphQL API by JWT Authentication

## Installation

```bash
$ npm install
```

## Add .env

Copy .env.example to .env.
Update the values of environment variables. In the example,
the expiration time of access token is 1 hour and the expiration time of refresh token is 1 day.

```bash
JWT_ACCESS_TOKEN_SECRET='myJwtSecretKey'
JWT_ACCESS_TOKEN_EXPIRATION='1h'
JWT_REFRESH_TOKEN_SECRET='myJwtRefreshKey'
JWT_REFRESH_TOKEN_EXPIRATION='1d'
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Test JWT Authentication

```bash

curl --location --request POST 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "user-1@yopmail.com",
    "password": "password1"
}'

```

and the response in

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMSIsImVtYWlsIjoidXNlci0xQHlvcG1haWwuY29tIiwiaWF0IjoxNjYwNjYzODU2LCJleHAiOjE2NjA2Njc0NTZ9.uGUTA4grbcd5ICMyurO6dE5KZAeXMNI-kggT7vSZ2v4",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItMSIsImVtYWlsIjoidXNlci0xQHlvcG1haWwuY29tIiwiaWF0IjoxNjYwNjYzODU2LCJleHAiOjE2NjA3NTAyNTZ9.3y8wGgIdRBPaCafcpqP4qG7Ly1e4AP3xXuyaAex5gkA"
}
```

Open GraphQL playground and call User query that requires authentication

Navigate to http://localhost:3000/graphql/playground
Add authorization to HTTP header

```
Query {
  whoAmI {
    email
    firstName
    lastName
  }
}

```

produces the result

```
{
  "data": {
    "whoAmI": {
      "email": "user-1@yopmail.com",
      "firstName": "first name 1",
      "lastName": "last name 1"
    }
  }
}

```
