const express = require('express')
const app = express()
const PORT = 8000
// const cors = cors()

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'WhoCares',
        'birthLocation': 'AnyTown'
    },

    'chance the rapper': {
        'age': 29,
        'birthName': 'WhoCares',
        'birthLocation': 'AnyTown'
    },
    'dylan': {
        'age': 29,
        'birthName': 'WhoCares',
        'birthLocation': 'AnyTown'
    },
    'unknown': {
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rapperName = request.params.rapperName.toLowerCase()
    if(rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        respond.json(rappers['dylan'])
    }
    // response.json(rappers)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it...`)
})