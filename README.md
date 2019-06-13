Customer Rewards Program
===============================

## What is this?
This is a searchable table of customer data that calculates the points earned from purchases for each of three months, and the total. It is built with [React](https://reactjs.org/).

You can see the data model in **data.json**, and the app logic and React components in **src/app.js**.

It takes an array of customers, each with an array of transactions, and calculates the points earned based on the following rules:
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

## Run the app
View this project online at [https://derekds.com/dev/rewards-program/](https://derekds.com/dev/rewards-program/).

## TODOs
* Write the CSS to make it look better.
* Add pagination and column sorting to the table.
* Allow user to define the range of months (the logic is already there in app.js, I just need to make the UI).
* Request data from JSON file (right now it's loaded as a script from the HTML).
* Abstract point calculation so that other formulas could be used(?)
