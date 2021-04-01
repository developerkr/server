const express = require('express')
const app = express()
const port = process.env.PORT||3000  
const bodyParser = require('body-parser')

const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, './public')
    },
    filename:(req,file,cb)=>{
        cb(null,"MyImage"+Date.now()+ file.originalname)
    }
})

const upload = multer({storage})

//middlewares

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

app.post('/user', upload.array('picture',100),(req,res)=>{
    console.log(req.files)
    // console.log(req.body)
    let imgNames = []
    for(let one of req.files){
        imgNames.push(one.filename)
    }
    res.send(JSON.stringify(imgNames))
})

app.listen(port,(err)=>{
    console.log(err)
    console.log(`Example app listening  at https://localhost:${port}`)
})

