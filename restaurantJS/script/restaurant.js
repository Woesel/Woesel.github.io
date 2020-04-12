function validateForm() {

  let name = document.getElementById("name1").value;
  let email = document.getElementById("email").value;
  let phone = Number(document.getElementById("phone").value);
  // console.log(name);
  if (name == ""|| email == ""|| phone == "") {
    if(name==""){
      document.getElementById("error1").style.display = "block";

    }
    if(email== ""){
      document.getElementById("error2").style.display = "block";

	}if(phone == ""){
		document.getElementById("error3").style.display = "block";

    }
    return false;  //  alert("Please enter your name");
  }else{
    alert("Form submitted successfully");
  }
  return false;
}
