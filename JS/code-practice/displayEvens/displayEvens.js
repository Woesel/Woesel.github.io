  let num1;
  let num2;
  let step;


function displayEvens() {

  document.getElementById("emptyStart").style.display = "none";
  document.getElementById("emptyEnd").style.display = "none";
  document.getElementById("emptyStep").style.display = "none";

  num1 = Number(document.getElementById("startNum").value);
  num2 = Number(document.getElementById("endNum").value);
  step = Number(document.getElementById("step").value);

  if (num1 == "") {
    document.getElementById("emptyStart").style.display = "block";
    return false;

  }if (num2 == "") {
    document.getElementById("emptyEnd").style.display = "block";
    return false;

  } else if (step == "") {
    document.getElementById("emptyStep").style.display = "block";
    return false;
  }

  document.getElementById("resultText").innerHTML = "Here are the even numbers between " + num1 + " and " + num2 + " incremented by " + step + ":";



  if (num1 > num2) {
    alert("Starting number should be smaller than ending number");

  } else if (step < 0) {
    alert("Please use a positive number ");
    return false;
  } else if (step > num1 && step > num2) {
    alert("In the Step field, please use a number lesser than Starting number and ending number ");
    return false;
  } else if (num1 % 2 !== 0 && step % 2 == 0) {
    alert("There is no even number is the specified value. Change starting number or the step.");
    return false;
  }

  let answer = "";

  for (let i = num1; i <= num2; i += step) {
    if (i % 2 == 0) {
      answer = answer + i + "<br>";
    }
  }
  document.getElementById("answer").innerHTML = answer;
  document.getElementById("showResult").style.display = "block";
  //  document.getElementById("showResult").style.display = "block";
}
