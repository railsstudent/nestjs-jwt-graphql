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

## Running the app in docker in watch mode

```bash
# watch mode
$ docker-compose up -d
```

TODO: Running the app in docker in production mode

## Stop all docker containers

```
$ docker-compose down
```

## Generate migration script in docker container

```
$ docker exec -it backend /bin/sh
$ /usr/src/app #  npm run typeorm:generate --name=CreateUser
```

Migration script will be created in src/migrations directory

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
query userQuer($id: String!) {
    whoAmI {
      id
      email
      firstName
      lastName
    }
    users {
      id
      email
      firstName
      lastName
    }
    user(id : $id) {
      id
      email
      firstName
      lastName
    }
  }

  Query Variable:
  {
    "id": "982f0441-b49c-4885-ae8e-4c9b97c0b345"
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
    "users": [
      ...
    ],
    "user": {
      "id": "982f0441-b49c-4885-ae8e-4c9b97c0b345",
      "email": "Ernie25@hotmail.com",
      "firstName": "Kody",
      "lastName": "Grimes"
    }
  }
}

```
