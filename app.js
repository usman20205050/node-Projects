const express = require('express');
const app = express();
const path = require('path');

const router = require('./routes/user');
// const { register } = require('module');

// const contorl = require('./controllers/user');

const port = process.env.PORT || 80;
app.use(('/api',router));

app.use('/public', express.static('public'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"))

app.get('/', (req, res)=>{
    res.status(200).send("you are live now");
});
// app.get('/register', (req, res)=>{
//     res.render(register)
// })
const server =  async ()=>{
    try {
        app.listen(port, ()=>{
            console.log("your server is running on port 80");
        })
    } catch (error) {
     console.log(error)
    }
};
server();