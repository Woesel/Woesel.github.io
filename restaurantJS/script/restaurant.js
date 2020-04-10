function validateForm() {

  let name = document.getElementById("name1").value;
  // let email = document.getElementById("email").value;
  // let phone = Number(document.getElementById("phone").value);
  // console.log(name);
  if (name == "") {
    document.getElementById("error1").style.display = "block";
    return false;
    //  alert("Please enter your name");
  }
  // if (email == "") {
  //   document.getElementById("error1").style.display = "block";
  //   return false;
  // }
  // if (phone == "") {
  //   document.getElementById("error1").style.display = "block";
  //   return false;
  // }
return false;
}
