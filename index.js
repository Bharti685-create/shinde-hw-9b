// Load the Express package as a module
const express = require("express");
const multer = require("multer")

// Access the exported service
const app = express();
const upload = multer();
app.get("/ex1",(request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

// Handle form data submission to the "/ex1" route
app.post("/ex1", upload.array(), (request, response) => {
  const name = request.body.name;
  const emailAddress = request.body.emailAddress
  response.send(`Hello ${name}, Thnakyou for your order. We will keep you posted on delivery status at ${emailAddress}`);
});








