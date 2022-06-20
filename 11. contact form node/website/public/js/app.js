const form = document.querySelector('.form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

// data validation
function validation () { 
    invalid = "";
    invalid += validateName();
    invalid += validateEmail();
    invalid += validateSubject();
    invalid += validateMessage();

    if (invalid.length>0 ) {
        return false;
    }else {
        return true;
    }
}

function validateName() {
    var error = "";

    if (name.value == "" ) {
        name.placeholder='Please enter your name';
        name.classList.add('error');
        name.classList.add('error-placeholder');
	     
        var error = "1";
    } else {
    	name.placeholder=''; 
    	name.classList.remove('error');
    	name.classList.remove('error-placeholder');
    }
    return error;   
}

function validateEmail() {
    var error = "";
    var emailInput = email.value;
	at = emailInput.indexOf("@");
	dot = emailInput.lastIndexOf(".");

    if (email.value == "") {
        email.placeholder='Please enter your email address';
        email.classList.add('error');
        email.classList.add('error-placeholder');

        var error="2";
    } else if (at < 1 || ( dot - at < 2 )) { 
        email.value='Please enter a valid email address'; 
        email.style.color = '#e85050';   
        email.classList.add('error');

        var error="3";
    } else {
        email.placeholder='';
        email.classList.remove('error');
    	email.classList.remove('error-placeholder');
    }
    return error;
}

function validateSubject() {
    var error = "";

    if (subject.value == "" ) {
        subject.placeholder='Please fill in the subject';
        subject.classList.add('error');
        subject.classList.add('error-placeholder');
	     
        var error = "4";
    } else {
    	subject.placeholder=''; 
    	subject.classList.remove('error');
    	subject.classList.remove('error-placeholder');
    }
    return error;   
}

function validateMessage() {
    var error = "";
    
    if(message.value == "" ) {
	    message.placeholder='Please provide a message';
	    message.classList.add('error-message');
        message.classList.add('error-placeholder'); 

	    var error = '5';
	} else {
        message.placeholder='';
        message.classList.remove('error-message');
    	message.classList.remove('error-placeholder');
    }
    return error;
}

// email clicked
email.addEventListener('click', ()=>{
	email.value = ''; 
	email.placeholder = ''; 
	email.style.color = 'black'; 
})

// form submission
form.addEventListener('submit', (event)=>{

	if (validation() === true) {
		event.preventDefault();

		var messageBox = document.getElementById('message-box');
		messageBox.style.display = 'block';

		//show message for 5 sec
		setTimeout (function(){
				messageBox.style.display = 'none';
		},3000);

		let data = {
			name: name.value,
			email: email.value,
			subject: subject.value,
			message: message.value
		}

		let xhr = new XMLHttpRequest();

		xhr.open('POST', '/');
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onload = function() {

			if(xhr.responseText == 'success'){

				name.value = '';
				email.value = '';
				subject.value = '';
				message.value = '';

			} 
		}

		xhr.send(JSON.stringify(data));
	}
});