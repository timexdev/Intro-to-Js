function saySomething() {
    // var username = document.getElementById("uname").value;
    var username = uname.value
    var greetingText = "Good Afternoon, " + username;
    alert(greetingText)
}

function ageCalculator() {
    var username = uName.value
    var yob = yearOfBirth.value;
    var age = 2024 - yob;

    if (age >= 18){
        alert("You are an Adult")
    } else if (age > 13 && age < 18){
        alert("You are a Teenager")
    } else if (age < 13 && age > 0 ){
        alert("You are a Kid")
    } else{
        alert ("You category is not found")
    }
    // var ageStatment = username + " your age is: " + age;
    // alert(ageStatment)
}