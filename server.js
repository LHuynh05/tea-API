const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'Yo mommas house' ,
        'waterTemp': 200,
        'steepTime': 180,
        'caffeinated': true ,
        'flavor': 'delicious',
    },

    'matcha':{
        'type': 'green',
        'origin': 'Yo mommas house' ,
        'waterTemp': 200,
        'steepTime': 180,
        'caffeinated': false ,
        'flavor': 'delicious',
},
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown' ,
        'waterTemp': 0,
        'steepTime': 0,
        'caffeinated': false ,
        'flavor': 'unknown',
}
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The serveris running on port ${PORT}! Better go Catch it!`)
})

app.get('/api/:name', (request, response)=>{
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName] ){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
    
})