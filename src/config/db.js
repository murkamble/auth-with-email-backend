const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        }).then(() => {
            console.log('MongoDB Connected...')
        })
    } catch (error) {
        console.log('MongoDB Connected error...')
    }
}

module.exports = connectDB