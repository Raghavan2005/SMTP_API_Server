//Import Start
const express = require('express');
const { generateApiKey } = require('generate-api-key');
const { sendmail } = require('./mail.js');
const { bodyfun } = require('./Body.js')
const rateLimit = require("express-rate-limit");
const requestIP = require('request-ip');
const app = express();
var fs = require('fs');
const { Console } = require('console');
//Import End
var currentDate = new Date();
//Port Start
const port = 1234;
//Port End
const ratelimit = 3;
// Temp Api Key Start
const apiKey = 'UQc8Tp1d9elWAh7KDIMkjz2moFs'; 
const contas = "dsfsdfsdfsdf"
// Temp Api Key End


// Rate Limiter Start
const limiter = rateLimit({
  max: ratelimit,
  windowMs: 5000,
  message: "Too many request from this IP try again after 10s",
  handler: (req, res, next, options) => {
    res.status(options.statusCode).send(options.message)
    writeattacklog(gettime() + ","
      + requestIP.getClientIp(req))
  },

});
app.use(limiter);
// Rate Limiter End

//API Key Verify Start
const verifyApiKey = (req, res, next) => {
  const apiKeyFromRequest = req.headers['x-api-key'];
  if (!apiKeyFromRequest || apiKeyFromRequest !== apiKey) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};
//API Key Verify End

// Server Listener Start
app.listen(port, () => console.log('Mail Server is Started at', port));
// Server Listener End

//Send Mail Use Post Start
app.post('/api/send-mail', verifyApiKey, async (req, res) => {

  if (req.headers['to-mail'] != null) {

    mailselector(req.headers['mail-code'], req)
    res.send({
      message: 'Mail Sended To The Client',
    });
  } else {
    res.send({
      message: 'Invaild Header',
    });
  }

});
//Send Mail Use Post End

//Mail Selector Start
function mailselector(incode, req) {
  if (incode == 0) {
    //ex:signup email
    //  await sendmail(req.headers['to-mail'].toString(),"testing",bodyfun("Fun Company",contas));
    writelog(gettime() + "," + req.headers['to-mail'] + "," + req.headers['x-api-key'] + "," + requestIP.getClientIp(req))
    return
  }
  if (incode == 1) { //ex:loginmail email

    return
  }
  return
}
//Mail Selector End

//Log Saving Start
const writelog = (logmsg) => {
 
  fs.appendFile('./Logs/' + currentDate.toDateString() + '.csv', logmsg.toString() + '\n', function (err) {
    if (err) throw err;
    if(err!=null){
      ratelimit=0;
      Console.log("Error Is Logs Storage",e)
    }
    console.log(gettime() + ' Log Saved');
  });
 
 
 
}
const writeattacklog = (logmsg) => {

  fs.appendFile('./Logs/AttackLogs/' + currentDate.toDateString() + '.csv', logmsg.toString() + '\n', function (err) {
    if (err) throw err;
    console.log(gettime() + ' AttackLogs Saved');
  });
}
//Log Saving End
//Timing Funtion Start

function gettime() {
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  var currentTime = hours + ":" + minutes + ":" + seconds;
  return currentTime
}
//Timing Funtion End