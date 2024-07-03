const express = require('express')
const UserModel = require('../models/UserModel')
const router = express.Router()

router.post('/register', async function (req, res) {
    try {
        const newitem = new UserModel(req.body)
        await newitem.save()
        res.send('data has been inserted')
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/login', async (req, res) => {
    try {
      const result = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password,
      })
      
      if (result) {
        const userobj = result.toObject()
        delete userobj.password
        res.send(userobj)
      }
    } catch (error) {
      console.log(error)
      res.status(400).send('error')
    }
  })
  
module.exports = router