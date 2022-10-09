const nodemailer = require('nodemailer');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require("dotenv").config()
console.log('1.To mail\n2 Tomail and Cc mail\n3 To mail, Cc mail and Bcc mail\n4 Exit');
const input = require('readline-sync');
let choose_your_option = input.question("choose your option :-");

let subject_Type = input.question('Type your subject :-')
let Type_textMessage =input.question(`Type_text_message :-`)
console.log(process.env.email);
if(choose_your_option ==1){
    let Tomail = input.question('Enter To mail :-')
    var mailDetails = {
        to: Tomail,
        subject: subject_Type,
        text:Type_textMessage
    };
}
else if(choose_your_option==2){
    let Tomail = input.question('Enter To mail :-')
    let CcMail = input.question('Enter Cc mail :-')

    var mailDetails = {
        to: Tomail,
        cc:CcMail,
        subject: subject_Type,
        text: Type_textMessage
    };
}
else if(choose_your_option==3){
    let Tomail = input.question('Enter To mail :-')
    let CcMail = input.question('Enter Cc mail :-')
    let BCcmail = input.question('Enter Bcc mail :-')

    var mailDetails = {
        to: Tomail,
        cc:CcMail,
        bcc : BCcmail,
        subject: subject_Type,
        text: ype_textMessage
    };
}
else{
    console.log('out of the code');
}

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user:process.env.email,
        pass: process.env.password
    }
});

mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log('Email sent successfully');
    }
});


app.listen(port,()=>{
    console.log(`Server is on :${port}`)
})