function validate(form) {
	
	var valid = true;
	var messageName = document.getElementById("firstName");
	var messageLname = document.getElementById("lastName");
	var messageBirthday = document.getElementById("birthday");
	var messageGender = document.getElementById("gender");
	var messageCountry = document.getElementById("country");
	var messageEmail = document.getElementById("email");
	var messageAddress = document.getElementById("address");
	
	var reText = /^\w*[^'|\"]+$/; //regex for text fields;
	var reEmail = /\w+@\w+\.[a-zA-Z]/g; // regex for E-Mail address;
	
	// validation First Name:
	if (document.form.fname.value === "") {
		document.form.fname.style.border = "2px solid red";
		messageName.innerHTML = "Please, provide your First Name!";
		document.form.fname.focus();
		valid = false;
		return false;
	}
	
	// regex test for First Name:
	else if (!reText.test(document.form.fname.value)) {
		document.form.fname.style.border = "2px solid red";
		messageName.innerHTML = "Invalid character (' or \")";
		document.form.fname.focus();
		valid = false;
		return false;
	}
	
	// validation Last Name:
	if (document.form.lname.value === "") {
		document.form.lname.style.border = "2px solid red";
		messageLname.innerHTML = "Please, provide your Last Name!";
		document.form.lname.focus();
		valid = false;
		return false;
	}
	
	// regex for Last Name:
	else if (!reText.test(document.form.lname.value)) {
		document.form.lname.style.border = "2px solid red";
		messageLname.innerHTML = "Invalid character (' or \")";
		document.form.lname.focus();
		valid = false;
		return false;
	}
	
	// validation for Birthday:
	if (document.form.bthday.value === "") {
		document.form.bthday.style.border = "2px solid red";
		messageBirthday.innerHTML = "Please, provide your Birthday!";
		document.form.bthday.focus();
		valid = false;
		return false;
	}
	
	// validation for Gender:
	if ((document.form.gender[0].checked == false) && (document.form.gender[1].checked == false)) {
		messageGender.innerHTML = "Please, provide your Gender!";
		valid = false;
		return false;
	}
	
	// validation for Country:
	if (document.form.country.value === "-1") {
		document.form.country.style.border = "2px solid red";
		messageCountry.innerHTML = "Please, choose your Country!";
		document.form.country.focus();
		valid = false;
		return false;
	}
	
	// validation for E-Mail:
	if (document.form.email.value === "") {
		document.form.email.style.border = "2px solid red";
		messageEmail.innerHTML = "Please, provide your E-Mail!";
		document.form.email.focus();
		valid = false;
		return false;
	}
	
	// regex for E-Mail:
	else if (!reEmail.test(document.form.email.value)) {
		document.form.email.style.border = "2px solid red";
		messageEmail.innerHTML = "Incorrect E-Mail! example@email.com";
		document.form.email.focus();
		valid = false;
		return false;
	}
	
	// validation for Address:
	if (document.form.address.value === "") {
		document.form.address.style.border = "2px solid red";
		messageAddress.innerHTML = "Please, provide your Address!";
		document.form.address.focus();
		valid = false;
		return false;
	}
	
	// regex for Address:
	else if (!reText.test(document.form.address.value)) {
		document.form.address.style.border = "2px solid red";
		messageAddress.innerHTML = "Invalid character (' or \")";
		document.form.address.focus();
		valid = false;
		return false;
	}
	
	if (valid) {
		alert("success");
	}
	return true;
}