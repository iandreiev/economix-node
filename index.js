const app = require('./app'),
      port = process.env.PORT || 444 

app.listen(port, ()=>{
    console.log(`Running on: ${port}`)
})