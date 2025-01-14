# Node.js Express Friends API

This project is a simple RESTful API built with Node.js and Express.js for managing a list of friends. It demonstrates how to handle GET, POST, PUT, and DELETE requests using an in-memory data store.

## Features

*   **GET `/`:** Retrieves all friends' details.
*   **GET `/:email`:** Retrieves details for a single friend using their email address.
*   **POST `/`:** Adds a new friend to the list with a unique email.
*   **PUT `/:email`:** Updates the details of an existing friend identified by their email address.
*   **DELETE `/:email`:** Removes a friend from the list using their email address.

## Technologies Used

*   Node.js
*   Express.js

## Getting Started

To run this server locally, follow these steps:

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 16 or higher) installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JayJay247in/nodejs-PracticeProject-AuthUserMgmt.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd nodejs-PracticeProject-AuthUserMgmt
    ```
3.  **Install dependencies:**

  Run `npm install` in the `/home/project/nodejs_PracticeProject_AuthUserMgmt` folder, to install `express` and other required packages.
  * If you have not already installed, you must also install `nodemon` using `npm install -g nodemon`

### Running the Server

1.  **Start the server:**

    ```bash
   npm run start_auth
    ```
   The server will start and will print the message `Server is running at port 5000` in the console.

## Testing Endpoints

You can test the API endpoints using `curl` from the terminal or using a GUI tool like Postman.

### Testing with curl

#### GET `/`

*   **Purpose:** Retrieve all friends' details.
*   **Command:**
    ```bash
    curl http://localhost:5000/friends
    ```
*   **Expected Output:** A JSON object representing all friends. For example:
    ```json
    {
        "johnsmith@gamil.com": {
            "firstName": "John",
            "lastName": "Doe",
            "DOB": "22-12-1990"
        },
        "annasmith@gamil.com": {
            "firstName": "Anna",
            "lastName": "smith",
            "DOB": "02-07-1983"
        },
        "peterjones@gamil.com": {
            "firstName": "Peter",
            "lastName": "Jones",
            "DOB": "21-03-1989"
        }
    }
    ```

#### GET `/:email`

*   **Purpose:** Retrieve a specific friend's details using their email address.
* **With Valid Email**
    *   **Command:**
         ```bash
          curl http://localhost:5000/friends/johnsmith@gamil.com
        ```
    *   **Expected Output:**
          ```json
          {
              "firstName": "John",
              "lastName": "Doe",
              "DOB": "22-12-1990"
           }
          ```

  * **With Invalid Email**
    * **Command:**
          ```bash
           curl -v http://localhost:5000/friends/invalid@email.com
          ```
  *   **Expected Output:**
        *   Status code: `404 Not Found`
        *    Body :  `Friend not found`

#### POST `/`

*   **Purpose:** Add a new friend's details.
*   **Command:**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"email": "newuser@email.com", "firstName": "New", "lastName": "User", "DOB": "11/11/2000"}' http://localhost:5000/friends
    ```
*  **Expected Output:**
      * Status Code: `201 Created`
     *  Response Body:  The new user object that was created on the server.
           ```json
           {
               "firstName": "New",
               "lastName": "User",
               "DOB": "11/11/2000"
           }
            ```

#### PUT `/:email`

*   **Purpose:** Update a friend's details using their email address.
*   **With Existing Email**
       *   **Command:**

         ```bash
         curl -X PUT -H "Content-Type: application/json" -d '{"firstName": "Updated", "lastName": "User", "DOB": "12-12-2000"}' http://localhost:5000/friends/newuser@email.com
        ```
      *   **Expected Output:**
            *  Status code `200 OK`.
            *  Response body : Updated data.
                 ```json
                 {
                     "firstName": "Updated",
                     "lastName": "User",
                     "DOB": "12-12-2000"
                 }
            ```
  *   **With Non Existing Email**
      * **Command**:
        ```bash
        curl -v -X PUT -H "Content-Type: application/json" -d '{"firstName": "Updated", "lastName": "User", "DOB": "12-12-2000"}' http://localhost:5000/friends/some@email.com
      ```
  *   **Expected output**:
      * Status code `404 Not Found`.
       * Body:  `Friend not found`

#### DELETE `/:email`

*   **Purpose:** Delete a friend using their email address.
*  **With Existing Email:**
    *   **Command:**
        ```bash
        curl -X DELETE http://localhost:5000/friends/newuser@email.com
        ```
     *  **Expected Output:**  `Friend deleted.`
*  **With non existing email:**
   *  **Command:**
          ```bash
          curl -v -X DELETE http://localhost:5000/friends/some@email.com
          ```
    * **Expected Output**:
        * Status code `404 Not Found`
        * Body : `Friend not found`

### Testing with Postman

You can also test the endpoints in the same way using Postman by providing the same url, request body, and header details.

**General `curl` Tips**

*   Use `-X <method>` to specify the HTTP method (`GET`, `POST`, `PUT`, `DELETE`).
*   Use `-H "Content-Type: application/json"` to include `Content-Type` header in requests where you are sending `json` in the request body.
*   Use `-d '{"key":"value"}'` to send data with POST or PUT requests with `-H "Content-Type: application/json"` header set.
*  Use `-v` for seeing detailed information of the request and response.

## Project Structure

*   `index_withauth.js`: Main server file.
*   `routes/friends.js`: Contains all the logic and routes for handling `/friends` endpoint.

## Author

Ikechukwu Faithful