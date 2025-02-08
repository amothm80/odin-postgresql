import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('new')

})

router.post('/',(req,res)=>{
    console.log("username to be saved: ", req.body.username)
    res.end()
})

export default router;