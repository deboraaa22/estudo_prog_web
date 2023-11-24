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

app.get('/users/add', (req, res) => {
    res.render('userform')
    })
    
    app.post('/users/save', (req, res) => {
    const nameProduto = req.body.nameProduto;
    const namefornecedor = req.body.namefornecedor;
    const dataCompra = req.body.dataCompra;
    const ValorCompra = req.body.ValorCompra;
    const ValorVenda = req.body.ValorVenda;
    const categoria = req.body.categoria;
    const user = { nameProduto: nameProduto, nameFornecedor: nameFornecedor, dataCompra: dataCompra, valorCompra: valorCompra, valorVenda: valorVenda, categoria: categoria }
    res.render('viewuser', { user: user })
    
    })

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('Server Started')
})

