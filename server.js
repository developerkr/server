const express = require('express')
const app = express()
const port = process.env.PORT||3000  
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json())
// app.use((req,res,next)=>{
//     console.log(req)
//     res.send("hello")
// }) 
app.get('/user',(req, res)=>{
    
    res.sendFile(__dirname+'\\src\\index.html')

    console.log(__dirname)
})

app.post('/user', (req,res)=>{
    console.log(req.body)
    res.send(`Jo'natildi`)
})

app.listen(port,(err)=>{
    console.log(err)
    console.log(`Example app listening  at https://localhost:${port}`)
})

