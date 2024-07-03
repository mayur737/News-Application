const express = require('express');
const NewsitemModel = require('../models/Newsitem');
const router = express.Router();


router.post('/addnewsitem', async function (req, res) {
  try {
    const newitem = new NewsitemModel(req.body);
    await newitem.save();
    res.send('news added successfully')
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/getallnewsitems', async function (req, res) {
  try {
    const data = await NewsitemModel.find()
    res.send(data)

  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/getnewsitembyid/:newsid', async function (req, res) {
  try {
    const data = await NewsitemModel.findOne( { _id: req.body.newsid } )
    res.send(data)
  } catch (error) {
    res.status(400).send(error)
  }
})
module.exports = router
