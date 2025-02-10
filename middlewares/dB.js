const { default: mongoose } = require("mongoose");

const connectDb = () => {
    try{
  const data=   mongoose.connect(process.env.MONGODB_URL)
  console.log(`Db connected`)
    } catch (err) {
        console.log(`err`)
    }
}

module.exports = connectDb
