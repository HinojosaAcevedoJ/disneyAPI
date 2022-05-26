const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../../../models')

const JWT_SECRET = process.env.JWT_SECRET

const login = async (req, res) => {
  const user = await db.User.findOne({ where : {username : req.body.username }});
  if(user){
    const password_valid = await bcrypt.compare(req.body.password,user.password);
    if(password_valid){
        token = jwt.sign({ "email" : user.email,"username":user.username },JWT_SECRET);
        res.status(200).json({ token : token });
    } else {
      res.status(400).json({ error : "User/Password Incorrect" });
    }
  
  }else{
    res.status(404).json({ error : "User/Password Incorrect" });
  }
}

module.exports = login