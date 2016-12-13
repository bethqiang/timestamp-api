# Timestamp API

### User Stories:

> 1. I can pass a string as a URL parameter, and it will check to see whether that string contains either a Unix timestamp or a natural language date (ex. December 15, 2015 or Dec 15, 2015, with or without commas).

> 2. If it does, it returns both the Unix timestamp and the natural language form of that date.

> 3. If it does not contain a date or Unix timestamp, it returns null for those properties.

Note: Solely numeric dates (ex. 12-15-15, or most variations thereof) have been excluded in the interest of not discriminating against either the group of people who choose to put their month first or the group of people who choose to put their day first.

### Example Usage:

[https://timestamp-api-bq.herokuapp.com/December 15, 2015](https://timestamp-api-bq.herokuapp.com/December 15, 2015)

[https://timestamp-api-bq.herokuapp.com/1450137600](https://timestamp-api-bq.herokuapp.com/1450137600)

### Example Output:

```
{
  unix: 1450137600,
  natural: "December 15, 2015"
}
```

### Technologies Used:

* Node.js
* Express.js
* [moment.js](http://momentjs.com/)

Developed for a Free Code Camp project. Original project idea link: [https://www.freecodecamp.com/challenges/timestamp-microservice](https://www.freecodecamp.com/challenges/timestamp-microservice)
