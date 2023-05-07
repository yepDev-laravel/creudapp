const express=require('express')
const path=require('path')
const router=express.Router()


router.get('/addStudent',(req, res)=>{
    res.render(path.join(__dirname, '/../view/addStudent.ejs'))
})

router.get('/editStudent',(req, res)=>{
    res.send('edit student')
})


module.exports=router