# My Learnings While Building Project 1

## express.Router()

- Learnt about express.Router()
- How you should not dump everything on the app.js file
- As your application grows, routes increases
- Different routes are stored in /routes/tasks.js
- The controller functions to get executed when user hits the routes are stored in /controller dir

## express.json()

- Learnt about express.json()
- Its needed more specifically for PUT and POST requests, when you want to send some data to the server
- This recognizes the incoming request object as a JSON Object

## MongoDB

- NoSQL, Non Relational DB
- Store JSON
- Easy to get started
- tables --> collection represents groups of items
- document -> represents a single item
- document is a set of key-value pairs and any data type can be used
- Free Cloud Hosting Platform - Atlas
- You can set it up on your system but for bigger applications cloud setup will be required!
- Documents in same collection dont need to have same set of fields or the structure

## PUT VS PATCH

- In tutorial, PUT was used but in application PATCH was used?
- Assumption/Expectation related to these terms is:
- PUT is used to replace an existing resource in the system
- PATCH is used to update the resource partially
- Both are used to update the resource but this is working this way is because our controller is built in that way
- For the PUT functionality, we can create another route and the only change we want to make is add the `overwrite: true` property to the `findOneAndUpdate` options!