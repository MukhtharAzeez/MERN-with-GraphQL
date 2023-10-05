const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected".cyan.bold)
    } catch (error) {
        console.log("failed to connect with mongodb", error)
    }
}

module.exports = {
    connectDB
}