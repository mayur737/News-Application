const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
app.use(express.json())

const newsRoute = require('./routes/newsRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/newsitems', newsRoute)
app.use('/api/users', userRoute)
app.get('/', (req, res) => res.send('hello Mayur'))

const port = 8000
require('./dbConnect')
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
