const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected successfully to server");

    const database = client.db('fruitsDB');
    const collection = database.collection('fruits');

    await collection.insertMany([
      {
        name: "Apple",
        score: 8,
        review: "Great Fruit",
      },
      {
        name: "Orange",
        score: 6,
        review: "Kinda Sour",
      },
      {
        name: "Banana",
        score: 9,
        review: "Great Stuff!",
      },
    ])

    console.log("Inserted 3 documents to the collection.");

    console.log("Found the following records:");
    console.log(await collection.find().toArray());
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
