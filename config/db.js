const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;

// //connect to the database
// mongoose
//   .connect(process.env.DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log("Database connected successfully"))
//   .catch(err => console.log(err));
// //since mongoose promise is depreciated, we overide it with node's promise
// mongoose.Promise = global.Promise;
