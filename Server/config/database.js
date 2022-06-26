const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose.connect(`${process.env.MONGOHOST}`,
  ).then(
    (data) => {
      console.log("Database connect succesfully ");
    }
  ).catch(err => { 
    console.log(err);
  })
}
module.exports = connectDatabase 