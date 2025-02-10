const express = require("express");
const app = express()
const port = 3000


app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send('hello');
})

app.post('/signup',(req,res)=>{
    const {username,email,password,dateofbirth} = req.body;
    if(!username)
        return res.status(400).Json({message:'Username cannot be empty'});
    if(!email)
        return res.status(400).json({message:'Email cannot be empty'});
    if(password.length < 8 || password.length > 16)
        return res.status(400).json({message:'Password length should be greater than 8 or less than or equal to 16'});
    return res.status(200).json({message:`server is succesfully running`})
})



app.listen(port,()=>{
    console.log(`port is listening at ${port}`)
})