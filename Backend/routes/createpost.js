const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');


const POST = mongoose.model('POST');



router.get('/', requireLogin, (req, res) => {
  POST.find()
  .populate('postedBy', '_id name')
  .then((posts) => res.json(posts))
  .catch(err => console.log(err))
})



router.post('/', requireLogin, (req, res) => {
  // console.log(req.body)
  const {caption, pic} = req.body;
  console.log(pic);
  if(!caption || !pic) {
    return res.status(422).json({error: 'Please Add all the Fields'})
  }

  const post = new POST({
    caption,
    photo:pic,
    postedBy: req.user 
  })


  post.save().then((result) => {
    return res.json({post: result})
  }).catch((err) => console.log(err))

})


  




module.exports = router