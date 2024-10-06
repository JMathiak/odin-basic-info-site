// let http = require('http')
// let fs = require('fs')
// let url = require ('url')


// const page404 = fs.readFileSync("404.html", "utf-8", (err, data)=> {
//     if (err) throw err;
//     return data;
// })
// http.createServer(function (req, res){
//     let q = url.parse(req.url, true);
//     let fileName = "";
//     if (q.pathname == "/") {
//       fileName = "." + "/index" + ".html";
//     } else {
//             fileName = "." + q.pathname + ".html";
//         }
      
    
//     fs.readFile(fileName, function(err, data){
//         if(err){
//             res.writeHead(404, {'Content-Type': 'text/html'})
//             res.write(page404)
//             return res.end()
//         }else{
//             res.writeHead(200, {'Content-Type': 'text/html'})
//             res.write(data)
//             return res.end()
//         }
      
//     })
   
// }).listen(8080)


const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})
app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact-me.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'))
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/404.html'))
})

const PORT = 3001;
app.listen(PORT, () => console.log(`My Express app - listening on ${PORT}!`));