 HEAD
 HEAD
# MongoDB Fundamentals - Week 1

## Setup Instructions

Before you begin this assignment, please make sure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - This is included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)

### Node.js Package Setup

Once you have Node.js installed, run the following commands in your assignment directory:

```bash
# Initialize a package.json file
npm init -y

# Install the MongoDB Node.js driver
npm install mongodb
```

## Assignment Overview

This week focuses on MongoDB fundamentals including:
- Creating and connecting to MongoDB databases
- CRUD operations (Create, Read, Update, Delete)
- MongoDB queries and filters
- Aggregation pipelines
- Indexing for performance

## Submission

Complete all the exercises in this assignment and push your code to GitHub using the provided GitHub Classroom link.

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 
=======
📚 PLP Bookstore – MongoDB Project
📖 Overview

This project demonstrates how to work with MongoDB using a collection of classic books.
It covers CRUD operations, advanced queries, aggregation pipelines, indexing, and pagination.

The dataset contains popular books with fields like title, author, genre, published_year, price, in_stock, pages, and publisher.

🛠️ Requirements

MongoDB Community Server
MongoDB Compass
Node.js
📂 Project Structure
plp-bookstore/
│
├── queries.js   # All MongoDB commands: CRUD, queries, aggregation, indexing
├── seed.js      # (optional) Script to insert sample books data
└── README.md    # Documentation

▶️ How to Run
Make sure your MongoDB server is running locally on port 27017:
net start MongoDB
or (Linux/Mac):
mongod
2. Insert Data
Run the seed.js file to insert the sample books into the plp_bookstore database:
mongosh "mongodb://127.0.0.1:27017" seed.js
3. Run Queries
Execute all queries from the queries.js file:
#bash
mongosh "mongodb://127.0.0.1:27017" queries.js
🧪 Example Queries
🔹 CRUD Operations
Find all books in the Fantasy genre:
#js
db.books.find({ genre: "Fantasy" })
Update the price of To Kill a Mockingbird:
db.books.updateOne(
  { title: "To Kill a Mockingbird" },
  { $set: { price: 15.99 } }
)
🔹 Advanced Queries
#Books in stock published after 2010:
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })
#Projection (only title, author, price):
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
#Sorting by price (descending):
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: -1 })
#Pagination (5 per page):
db.books.find().skip(5).limit(5)

🔹 Aggregation
#Average book price by genre:
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])
#Most published author:
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])
#Group by publication decade:
db.books.aggregate([
  {
    $group: {
      _id: {
        decade: { $multiply: [ { $floor: { $divide: [ "$published_year", 10 ] } }, 10 ] }
      },
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { "_id.decade": 1 } }
])

🔹 Indexing
#Create index on title:
db.books.createIndex({ title: 1 })
#Create compound index on author and published_year:
db.books.createIndex({ author: 1, published_year: 1 })

✅ Conclusion

This project helps you practice:

Creating and querying MongoDB collections

Using projections, sorting, and pagination

Performing advanced analytics with the aggregation pipeline

Optimizing queries with indexes


# trial1
 c02ba49239bd7eaef6b8d4de68f8579efc9c82f1
