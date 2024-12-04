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

re## Responses

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
-  PLease make sure that all required fields are provided in the request body.
- The email must be unique; if a user with the same email already exists, the registration will fail.