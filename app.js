const express = require("express");
const app = express();


//-----------------------send text to the browser 
// app.get("/", (request, response, next) => response.send("hello world"));

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
// app.get("/", (req, res, next) => res.render("index.html"));


// creates an absolute path pointing to a folder called "views"
// app.set("views", __dirname + "/views");

//INSTALLED HANDLEBARS
//tell Express app that HBS will be in charge of rendering the HTML:
app.set("view engine", "hbs");

// send views/index.hbs for displaying in the browser
app.get("/", (req, res, next) => {
    let data = {
        name: "Ironhacker",
        bootcamp: "Ironhack Web Dev"
    };

    res.render("index")
});

//render Oxxxymiron's page
app.get("/about", (req, res, next) => res.render("about"));


app.listen(3000);