# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description

This endpoint allows a new user to register by providing their details. It validates the input data and creates a new user in the database. If the registration is successful, it returns a JSON Web Token (JWT) for authentication.

## Required Data

The request body must be in JSON format and include the following fields:

- **fullname**: An object containing:
  - **firstname**: A string with a minimum length of 3 characters (required).
  - **lastname**: A string with a minimum length of 3 characters (optional).
- **email**: A string representing the user's email address (required). It must be a valid email format and unique in the database.
- **password**: A string with a minimum length of 6 characters (required).

### Example Request Body

{
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"password": "securepassword"
}

## Responses

### Success

- **Status Code**: `200 OK`
- **Response Body**:
  {
      "Token": "your_jwt_token",
      "user": {
      "fullname": {
      "firstname": "John",
      "lastname": "Doe"
  },
      "email": "john.doe@example.com",
      "socketId": null
  }
  }

### Client Error

- **Status Code**: `400 Bad Request`
- **Response Body**:
  {
  "msg": "Invalid Email",
  "param": "email",
  "location": "body"
  }

## Notes
-  Please make sure that all required fields are provided in the request body.
- The email must be unique; if a user with the same email already exists, the registration will fail.

# User Login Endpoint

## Endpoint

`POST /users/login`

## Description

This endpoint allows an existing user to log in by providing their email and password. It validates the input data and checks the credentials against the database. If the login is successful, it returns a JSON Web Token (JWT) for authentication.

## Required Data

The request body must be in JSON format and include the following fields:

- **email**: A string representing the user's email address (required). It must be a valid email format.
- **password**: A string with a minimum length of 6 characters (required).

### Example Request Body

{
"email": "john.doe@example.com",
"password": "securepassword"
}

## Responses

### Success

- **Status Code**: `200 OK`
- **Response Body**:
  {
      "Token": "your_jwt_token",
      "user": {
      "fullname": {
      "firstname": "John",
      "lastname": "Doe"
  },
      "email": "john.doe@example.com",
      "socketId": null
  }
  }

### Client Error

- **Status Code**: `401 Unauthorized`
- **Response Body**:
  {
  "message": "Invalid Email or Password"
  }

## Notes
- Ensure that the email and password are correct. If the credentials do not match, the login will fail.

# User Logout Endpoint

## Endpoint

`GET /users/logout`

## Description

This endpoint allows a logged-in user to log out by invalidating their current session token. It clears the authentication token from the client's cookies and adds the token to a blacklist to prevent further use.

## Required Data

No request body is required for this endpoint. The token is expected to be sent via cookies or the `Authorization` header.

## Responses

### Success

- **Status Code**: `200 OK`
- **Response Body**:
  {
      "message": "Logged out"
  }

### Client Error

- **Status Code**: `401 Unauthorized`
- **Response Body**:
  {
      "message": "No token provided"
  }

## Notes

- Ensure that the user is logged in before attempting to log out. If no valid token is provided, the logout will fail.
- The token is invalidated by adding it to a blacklist, ensuring it cannot be used again.