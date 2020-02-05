const express = require("express");
const app = express();


//-----------------------send text to the browser 
app.get("/", (request, response, next) => response.send("hello world"));

//-----------------------BAD WAT of sending more complex HTML to the browser
// app.get("/hello", (req, res, next) => {
//     res.send(`
//       <!doctype html>
//       <html>
//         <head>
//           <link rel="stylesheet" href="stylesheets/style.css">
//         </head>
//         <body>
//           This is my second route
//         </body>
//       </html>
//     `);
// });

//-----------------------BETTER WAY - create files specifically for HTML
app.get("/", (req, res, next) => res.render("index.html"));


// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");



app.listen(3000);