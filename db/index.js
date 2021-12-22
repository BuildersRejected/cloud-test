const mongoose = require("mongoose")

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://BRejected:<password>@cluster0.dpr9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("testies");
//   // perform actions on the collection object
//   client.close();
// });


const dbUrl = 'mongodb+srv://BRejected:<f1re0fG0d>@cluster0.dpr9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', console.error);

mongoose.connection.on('connected', () => {
    console.log("Mongoose Connected")
});
