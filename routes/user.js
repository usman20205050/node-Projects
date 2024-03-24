const express = require('express');
const router = express.Router();
const path = require("path");
//const usermodel = require("../models/userModel");
const multer = require('multer');
const parser = require('body-parser');
const userModel = require('../models/userModel');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, path.join(__dirname, '../public/userimages'))
    },
    filename:(req,file,cb)=>{
        const name = Date.now()+'-'+ file.originalname;
        cb(null,name);
    }
})
const upload = multer({storage:storage});

const {userApi ,userApiTest, registerFun , registerUser} = require("../controllers/user");
router.use(parser.json());
router.use(parser.urlencoded({extended:true}))
router.route('/api').get(userApi);

router.route('/api/test').get(userApiTest);
router.route('/register').get(registerFun);
router.post('/register', upload.single("file"), registerUser);
module.exports = router;
