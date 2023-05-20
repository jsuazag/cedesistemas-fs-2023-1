const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/db_moreuse";

const conn = async () => {
  await mongoose.connect(uri);
  console.log('connection mongo running');
}

conn().catch(error => console.error('Error connecting with mongo', error));
