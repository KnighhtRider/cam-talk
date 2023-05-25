const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  caption: {
    type: String, 
    required: true,
  },
  photo: {
    type: String,
    require: true,
  },
  likes: [{type:ObjectId, ref:'USER'}],
  comments: [{
    comment: {type:String},
    postedBy: {type:ObjectId}
  }],
  postedBy: {
    type: ObjectId,
    ref: 'USER'
  }

})

mongoose.model('POST', postSchema)


