#### Link to the Server ---------------------------------------
#                      |  https://jobs-api-rkev.onrender.com  |
####                    ---------------------------------------

#### Summary

Job API is a basic API project powered by NodeJs
This Project is specifically made to demonstrate the basic Architecture of a server 

The following work done to establish engine :-
  1. Establishing server (via Express js)
  2. Making route Architecture 
  3. Modelling DataBase Structure
  4. Connecting MongoDB to the server
  5. A complex error handling 
  6. Assinging logic to the Routes 
  7. Taking request parameter from the client 
  8. Responding with expected payload
  9. User Validation/Authentication
  10.Performing CRUD operation with user Database.

These are the least feature there are many more

#### 




#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, p assword - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security

- helmet
- cors
- xss-clean
- express-rate-limit

Swagger UI

```yaml
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
```
