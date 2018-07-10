const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../dist')
app.use(express.static(publicPath))

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true },
  () => {
    console.log('connected to mongodb')
  }
)

function ascending(arr) {
  let temp
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

app.listen(port, () => {
  console.log(`listening on port no ${port}`)
})
