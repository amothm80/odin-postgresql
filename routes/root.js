import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    console.log("usernames will be logged here - wip")
    res.end()
})

export default router;