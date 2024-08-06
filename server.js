/** 1. Express server setup
 * import express framework
 * create app by calling express() module
 * define a port
 */
const express = require('express')
const app = express()
const port = 8000

app.use(express.static('public')) // 5. this means anything that specified like the public folder can be served up to frontend. Go to public/index.html
app.use(express.json())


// routes

app.get('/info/:dynamicparam', (req, res) => {
    const {dynamicparam} = req.params  // 15. destructuring params object. name must be same as param in url
    const {key} = req.query  // 15. destructuring query object
    console.log(dynamicparam, key)
    res.status(200).json({info: 'preset text'}) // 4. backend listens to this request route from frontend, then sends response data back, in this case html
})

app.post('/', (req, res) => {
    const { payload } = req.body  // 16. we are sending using json so we have to let express know by writing app.use(express.json())
    console.log(payload)
    if(!payload){
        return res.status(400).send({status: 'request failed'})

    }
    res.status(200).send({status: 'received'})

})





// 2. Since servers listen to requests from frontend servers, 
// we need to tell our server to listen on a particular port
// This line essentially starts the server.
app.listen(port, () => {
    console.log(`Server has started on port : ${port}`)
})

// 3. We can now start the server by including a script command in the package.json file



