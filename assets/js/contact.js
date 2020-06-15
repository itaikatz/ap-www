window.addEventListener('load', function() {
	var emailValid = true;
	var nameValid = true;
	var messageValid = true;
	
	// Check if email address follows standard form
	function validateEmail() {
		var email = document.getElementById('email')
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(email.value)) {
			emailValid = true;
			email.classList.remove("invalid")
		}
		else {
			emailValid = false;
			email.classList.add("invalid")
		}
	}
	function validateName() {
		var name = document.getElementById('name')
		if (name.value != '') {
			nameValid = true;
			name.classList.remove("invalid")
		}
		else {
			nameValid = false;
			name.classList.add("invalid")
		}
	}
	function validateMessage() {
		var msg = document.getElementById('message')
		if (msg.value != '') {
			messageValid = true;
			msg.classList.remove("invalid")
		}
		else {
			messageValid = false;
			msg.classList.add("invalid")
		}
	}
	document.getElementById('submit-button').addEventListener('click', function (e) {
		event.preventDefault();

		document.getElementById('email').addEventListener('input', validateEmail);
		document.getElementById('name').addEventListener('input', validateName);
		document.getElementById('message').addEventListener('input', validateMessage);
		validateEmail();
		validateName();
		validateMessage();

		if (emailValid && messageValid && nameValid ) {
			document.getElementById('form').submit();
		}
	})

})