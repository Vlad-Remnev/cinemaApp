const express = require('express')
const app = express()
const cors = require("cors");
const port = 3001

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/movies', (req, res) => {
    res.json({
        items: [
            {
                id: 1,
                title: 'In the Land of the Head Hunters',
                genres: ['Drama, ', 'History'],
                director: 'Edward S. Curtis',
                writers: ['Edward S. Curtis (story)'],
                year: 1972,
                cast: ['Stanley Hunt, ', 'Sarah Constance Smith Hunt, ',
                    'Mrs. George Walkus, ', 'Paddy \'Malid, '],
                plot: 'Original advertising for the film describes it as a drama of primitive life on the shores of the North Pacific...'
            }
        ]
    })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
