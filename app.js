const express = require('express')
const app = express()
const cors = require('cors')
const port = parseInt(process.env.PORT || 7000)
const data = require('./api/homeTown')

app.use(cors())

function dataId(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

app.get('/', function(request, response){
  response.json({
    data
  })
})

app.get('/:id', function(request, response){
  var homeTown = dataId(data, request.params.id)
  if (!homeTown) {
    response.status(404).json({
      error: {
        message: 'No record found!'
      }
    })
  }else {
    response.json({
      data: homeTown
    })
  }
})

app.listen(port, () => console.log('listening on port', port))