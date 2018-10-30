const express = require('express')
const hbs = require('hbs')
const app = express()

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/partials')

app.get('/',(req,res) => {
    res.render('home');
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})