var express = require('express');
var router = express.Router();
var express = require('nodemailer');
require('../models/enquiry');
var mongoose = require('mongoose');
var Enquiry = mongoose.model('enqs');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});


router.get('/category', function(req, res, next) {
  res.render('category', { title: 'Express' });
});





router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});



router.get('/single-blog', function(req, res, next) {
  res.render('single-blog', { title: 'Express' });
});


router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'Express' });
});

router.post('/', (req, res) => {
  
  const output = `
    <p>You have a  New Subscriber</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Email: ${req.body.EMAIL}</li>
    </ul>
    <h3>Message</h3>
    <p>HEY THERE U ARE NOW SUBSCRIBED TO THE NEWLETTER STAY TUNED FOR MORE.</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'akashvikas413@gmail.com', // generated ethereal user
        pass: 'anita@123'  // generated ethereal password
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'akashvikas413@gmail.com', // sender address
      to: 'vinodmishra756@gmail.com', // list of receivers
      subject: 'New Enquiry', // Subject line
      text: 'The Alpha centerprises', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send(`<body style="background-color:orange;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">Congrats You are now subscribed to our newsletter.</div></body>`); 
  });
});

router.post('/index', (req, res) => {
  
  const output = `
    <p>You have a  New Enquiry</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Email: ${req.body.EMAIL}</li>
    </ul>
    <h3>Message</h3>
    <p>HEY THERE U ARE NOW SUBSCRIBED TO THE NEWLETTER STAY TUNED FOR MORE.</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'akashvikas413@gmail.com', // generated ethereal user
        pass: 'anita@123'  // generated ethereal password
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'akashvikas413@gmail.com', // sender address
      to: 'vinodmishra756@gmail.com', // list of receivers
      subject: 'New Enquiry', // Subject line
      text: 'From Brandzia Website', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send(`<body style="background-color:orange;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">Congrats You are now subscribed to our newsletter.</div></body>`); 
  });
});

router.post('/single-blog', (req, res) => {
  
  const output = `
    <p>You have a  New Enquiry</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Email: ${req.body.EMAIL}</li>
    </ul>
    <h3>Message</h3>
    <p>HEY THERE U ARE NOW SUBSCRIBED TO THE NEWLETTER STAY TUNED FOR MORE.</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'akashvikas413@gmail.com', // generated ethereal user
        pass: 'anita@123'  // generated ethereal password
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'akashvikas413@gmail.com', // sender address
      to: 'vinodmishra756@gmail.com', // list of receivers
      subject: 'New Enquiry', // Subject line
      text: 'From Brandzia Website', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send(`<body style="background-color:orange;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">Congrats You are now subscribed to our newsletter.</div></body>`); 
  });
});

router.post('/blog', (req, res) => {
  
  const output = `
    <p>You have a  New Enquiry</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Email: ${req.body.EMAIL}</li>
    </ul>
    <h3>Message</h3>
    <p>HEY THERE U ARE NOW SUBSCRIBED TO THE NEWLETTER STAY TUNED FOR MORE.</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'akashvikas413@gmail.com', // generated ethereal user
        pass: 'anita@123'  // generated ethereal password
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'akashvikas413@gmail.com', // sender address
      to: 'vinodmishra756@gmail.com', // list of receivers
      subject: 'New Enquiry', // Subject line
      text: 'From Brandzia Website', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send(`<body style="background-color:orange;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">Congrats You are now subscribed to our newsletter.</div></body>`); 
  });
});


router.post('/category', (req, res) => {
  
  const output = `
    <p>You have a  New Enquiry</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Email: ${req.body.EMAIL}</li>
    </ul>
    <h3>Message</h3>
    <p>HEY THERE U ARE NOW SUBSCRIBED TO THE NEWLETTER STAY TUNED FOR MORE.</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'akashvikas413@gmail.com', // generated ethereal user
        pass: 'anita@123'  // generated ethereal password
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'akashvikas413@gmail.com', // sender address
      to: 'vinodmishra756@gmail.com', // list of receivers
      subject: 'New Enquiry', // Subject line
      text: 'From Brandzia Website', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send(`<body style="background-color:orange;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">Congrats You are now subscribed to our newsletter.</div></body>`); 
  });
});

router.post('/contact', (req, res) => {
  
  const output = `
    <p>You have a  New Enquiry</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Email: ${req.body.EMAIL}</li>
    </ul>
    <h3>Message</h3>
    <p>HEY THERE U ARE NOW SUBSCRIBED TO THE NEWLETTER STAY TUNED FOR MORE.</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'akashvikas413@gmail.com', // generated ethereal user
        pass: 'anita@123'  // generated ethereal password
    },
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'akashvikas413@gmail.com', // sender address
      to: 'vinodmishra756@gmail.com', // list of receivers
      subject: 'New Enquiry', // Subject line
      text: 'From Brandzia Website', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send(`<body style="background-color:orange;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">Congrats You are now subscribed to our newsletter.</div></body>`); 
  });
});

router.post('/enq', function(req, res) {
  new Enquiry({name : req.body.name, email :
     req.body.email, subject : req.body.subject,
     message: req.body.message}
 
 
)
  .save(function(err, Enquiry) {
    console.log('enqs');
    res.send(`<body style="background-color:orange;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);"><h1> Your Message has been saved<h1></div></body>`);
  });
});



module.exports = router;
