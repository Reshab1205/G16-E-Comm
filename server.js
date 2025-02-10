const { configDotenv } = require('dotenv')
const  express = require('express')
const connectDb = require('./middlewares/dB')

const app = express()

app.use(express.json())

configDotenv()
connectDb()


app.get('/', (req,res) => {
    res.send('Hello G16')
})

app.post('/register', (req,res) => {
    const inputData = req.body
    console.log(inputData)
    res.send(inputData)
})





app.listen(process.env.PORT, () => {
    console.log(`Server started on 5000`)
})