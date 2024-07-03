const mongoose = require('mongoose')
const newsitemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Object,
      require: '',
    },
  },
  { timestamps: true }
)
const NewsitemsModel = mongoose.model('Newsitem', newsitemSchema)

module.exports = NewsitemsModel
