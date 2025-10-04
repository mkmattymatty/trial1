//Finding all books in a specific genre//
plp_bookstore> db.books.find({ genre: "Fantasy" })


//Finding books published after a certain year//
plp_bookstore> db.books.find({ published_year: { $gt: 1900 } })


//Find books by a specific author//
plp_bookstore> db.books.find({ author: "Harper Lee" })

//To update the price of a specific book
db.books.updateOne(
  { title: "To Kill a Mockingbird" }, 
  { $set: { price: 15.99 } }           
)

//delete a book by a title
db.books.deleteOne({ title: "To Kill a Mockingbird" })

//ADVANCED QUERIES
//Find a books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

//Using projections to find only title, author, and price for all books:
db.books.find(
  {}, 
  { title: 1, author: 1, price: 1, _id: 0 }
)

  //implement sorting to display books both in ascending and descending order
  //ascending..
 db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: 1 })

    //descending..
    db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: -1 })

    //Use the limit and skip methods to implement pagination (5 books per page)
    //Let’s say you want 5 books per page:
    //Page 1 (books 1–5)
db.books.find().limit(5)
//📘 Page 2 (books 6–10)
db.books.find().skip(5).limit(5)
//Page 3 (books 11–15
db.books.find().skip(10).limit(5)


//Task 4: Aggregation Pipeline
//calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]).toArray()



  // to find the author with the most books in the collection
  db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },   // group by author and count books
  { $sort: { totalBooks: -1 } },                             // sort descending by count
  { $limit: 1 }                                              // take the top 1
])

//pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: { 
        decade: { $multiply: [ { $floor: { $divide: [ "$published_year", 10 ] } }, 10 ] } 
      },
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { "_id.decade": 1 } } // sort by decade ascending
])


//Task 5: Indexing
//index on the title field for faster searches
db.books.createIndex({ title: 1 })


//Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })


//a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: {
        decade: { 
          $multiply: [ { $floor: { $divide: [ "$published_year", 10 ] } }, 10 ] 
        }
      },
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.decade": 1 } // sort by decade ascending
  }
])


////////////finished----
