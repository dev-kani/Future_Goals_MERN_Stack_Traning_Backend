const mongoose = require('mongoose')

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI)
    // const conn = mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected to MonoDB`.cyan)
    // console.log(`MonoDB Connected ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB