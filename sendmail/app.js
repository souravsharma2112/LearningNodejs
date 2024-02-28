// first install nodemailer
// with npm install nodemailer

// second allow less secure app
// https://myaccount.google.com/lesssecureapps

// write program

const nodeMailer = require('nodemailer');

const transport = nodeMailer.createTransport({
    host : "smtp.google.com",
    port : 587,
    secure : false,
    requireTLS : true,
    auth : {
        user : `abc@gmail.com`,
        pass : `abcdse`
    }
})
const mailOption = {
    from : `abc@gmail.com`,
    to : `cfd@gmail.com`,
    subject : "Get a Job",
    text : "Find as soon as possible"
}

transport.sendMail(mailOption , function(err , info){
    if(error){
        console.warn(error);
    }
    else{
        console.warn(`mail sent succesfully ${info.response}`);
    }
})