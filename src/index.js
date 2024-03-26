const express = require('express');
const { generateApiKey } = require('generate-api-key');
const { sendmail } = require('./mail.js');
const {bodyfun} = require('./Body.js')

const app = express();
const port = 1234;
var fs = require('fs');
var currentDate = new Date();

// API key for authentication
const apiKey = 'UQc8Tp1d9elWAh7KDIMkjz2moFs'; // Change this to your actual API key
const contas = "The 704 and its successors have a 36-bit word length and a 15-bit address space. These computers had two instruction formats, one of which, the Type A, had a short, 3-bit, operation code prefix and two 15-bit fields separated by a 3-bit tag. The first 15-bit field was the operand address and the second held a decrement or count. The tag specified one of three index registers. Indexing was a subtractive process on the 704, hence the value to be loaded into an index register was called a.[2]: p. 8  The 704 hardware had special instructions for accessing the address and decrement fields in a word.[2]: p. 26  As a result it was efficient to use those two fields to store within a single word the two pointers needed for a list"
// Middleware function to verify API key
const verifyApiKey = (req, res, next) => {
  // Get API key from request header
  const apiKeyFromRequest = req.headers['x-api-key'];

  if (!apiKeyFromRequest || apiKeyFromRequest !== apiKey) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next(); // Call next middleware if API key is verified
};


// Authentication endpoint (not needed for API key authentication)
// This endpoint is only needed if you're generating API keys dynamically
// You can remove this endpoint if you're using a static API key
app.post('/login', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Protected route - requires API key verification
app.post('/mail', verifyApiKey,async  (req, res) => {
   
    if(req.headers['to-mail']!=null){ 
    //  await sendmail(req.headers['to-mail'].toString(),"testing",bodyfun("Fun Company",contas));
    }
    writelog(gettime()+","+req.headers['to-mail']+","+req.headers['x-api-key'])
  res.send({
    message: 'New user was added to the list',
  });
});

app.listen(port, () => console.log('Mail Server is Started at', port));

const writelog=(logmsg)=>{
 
  fs.appendFile(currentDate.toDateString()+'.txt', logmsg.toString()+'\n', function (err) {
    if (err) throw err;
    console.log('Saved at '+currentTime);
  });
}
function gettime(){
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  var currentTime = hours + ":" + minutes + ":" + seconds;
 return  currentTime
}