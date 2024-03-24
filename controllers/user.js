const userModel = require("../models/userModel");

const userApi = async (req,res)=>{
    res.status(200).json({
        name:"usman",
        roll_no:"09874",
        batch:"spring 2019"
    })

}
const userApiTest = async (req,res)=>{
    res.status(200).json({
        name:"test",
        roll_no:"test",
        batch:"test"
    })

}

const registerFun = async (req, res)=>{
res.render("register")
};
const registerUser = async (req, res)=>{
    try {
        const user = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        file: req.file.filename
    })
   const userData =  await user.save();
    if(userData){
    res.render("register.pug");
   }
   else{
    res.render("register.pug");
   }
}
    catch (error) {
        console.log(error.message);
    }
 }
module.exports = {userApi, userApiTest, registerFun, registerUser};
