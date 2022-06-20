const express = require('express');
const site = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

site.use(express.static('public'));
site.use(express.json());

site.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/index.html');
});

site.post('/', (req, res)=>{

	const sender = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'xxx',  // your email
			pass: 'xxx'  // your APP password (not user passw)
		}
	});

	const mail = {
		from: req.body.email,
		to: 'xxx', // your email
		subject: req.body.subject,
		text: req.body.message
	};

	sender.sendMail(mail, (error, info)=>{
		if(error){
			console.log(error);
			res.send('error');
		}else{
			console.log('message sent succesfully')
			res.send('success');
		}
	})
});

site.listen(PORT, ()=>{
	console.log('server is running');
});