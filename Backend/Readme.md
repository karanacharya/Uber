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

# Create Ride Endpoint

## Endpoint

`POST /rides/create`

## Description

This endpoint allows a user to create a new ride by providing the necessary details. It validates the input data and creates a new ride in the database. If the ride creation is successful, it returns the ride details.

## Required Data

The request body must be in JSON format and include the following fields:

- **pickup**: A string representing the pickup location (required). It must be at least 3 characters long.
- **destination**: A string representing the destination location (required). It must be at least 3 characters long.
- **vehicleType**: A string representing the type of vehicle (required). It must be one of the following values: `auto`, `car`, `moto`.

### Example Request Body

```json
{
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "vehicleType": "car"
}
```

## Responses

### Success

- **Status Code**: `201 Created`
- **Response Body**:
  ```json
  {
    "_id": "ride_id",
    "user": "user_id",
    "pickup": "123 Main St",
    "destination": "456 Elm St",
    "fare": 100,
    "status": "Pending",
    "otp": "123456"
  }
  ```

### Client Error

- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid pickup location",
        "param": "pickup",
        "location": "body"
      }
    ]
  }
  ```

### Server Error

- **Status Code**: `500 Internal Server Error`
- **Response Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

## Notes

- Ensure that all required fields are provided in the request body.
- The `vehicleType` must be one of the specified values: `auto`, `car`, `moto`.
- The user must be authenticated to create a ride.

# Get Coordinates Endpoint

## Endpoint

`GET /maps/get-coordinates`

## Description

This endpoint allows a user to get the coordinates (latitude and longitude) of a given address. It validates the input data and fetches the coordinates using the Google Maps API.

## Required Data

The request must include the following query parameter:

- **address**: A string representing the address (required). It must be at least 3 characters long.

### Example Request

```
GET /maps/get-coordinates?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA
```

## Responses

### Success

- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "ltd": 37.4224764,
    "lng": -122.0842499
  }
  ```

### Client Error

- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid address",
        "param": "address",
        "location": "query"
      }
    ]
  }
  ```

### Not Found

- **Status Code**: `404 Not Found`
- **Response Body**:
  ```json
  {
    "message": "Coordinate not found"
  }
  ```

## Notes

- Ensure that the address is correctly formatted and at least 3 characters long.

# Get Distance and Time Endpoint

## Endpoint

`GET /maps/get-distance-time`

## Description

This endpoint allows a user to get the distance and estimated travel time between two addresses. It validates the input data and fetches the distance and time using the Google Maps API.

## Required Data

The request must include the following query parameters:

- **origin**: A string representing the origin address (required). It must be at least 3 characters long.
- **destination**: A string representing the destination address (required). It must be at least 3 characters long.

### Example Request

```
GET /maps/get-distance-time?origin=1600+Amphitheatre+Parkway,+Mountain+View,+CA&destination=1+Infinite+Loop,+Cupertino,+CA
```

## Responses

### Success

- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  {
    "distance": {
      "text": "14.4 mi",
      "value": 23188
    },
    "duration": {
      "text": "20 mins",
      "value": 1200
    }
  }
  ```

### Client Error

- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid origin",
        "param": "origin",
        "location": "query"
      },
      {
        "msg": "Invalid destination",
        "param": "destination",
        "location": "query"
      }
    ]
  }
  ```

### Not Found

- **Status Code**: `404 Not Found`
- **Response Body**:
  ```json
  {
    "message": "No routes found"
  }
  ```

## Notes

- Ensure that both the origin and destination addresses are correctly formatted and at least 3 characters long.

# Get Suggestions Endpoint

## Endpoint

`GET /maps/get-suggestions`

## Description

This endpoint allows a user to get address suggestions based on a partial input. It validates the input data and fetches the suggestions using the Google Maps API.

## Required Data

The request must include the following query parameter:

- **input**: A string representing the partial address input (required). It must be at least 3 characters long.

### Example Request

```
GET /maps/get-suggestions?input=1600+Amphitheatre
```

## Responses

### Success

- **Status Code**: `200 OK`
- **Response Body**:
  ```json
  [
    {
      "description": "1600 Amphitheatre Parkway, Mountain View, CA, USA",
      "place_id": "ChIJ2eUgeAK6j4ARbn5u_wAGqWA"
    },
    ...
  ]
  ```

### Client Error

- **Status Code**: `400 Bad Request`
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid input",
        "param": "input",
        "location": "query"
      }
    ]
  }
  ```

### Not Found

- **Status Code**: `404 Not Found`
- **Response Body**:
  ```json
  {
    "message": "Unable to fetch suggestions"
  }
  ```

## Notes

- Ensure that the input is correctly formatted and at least 3 characters long.
- The suggestions are fetched using the Google Maps Places API.