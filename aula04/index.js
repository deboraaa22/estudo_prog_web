const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

//configure template hand
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//parser para leitura do body
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//adcionando css
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('Server Started')
})
