function validateForm()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;
    var course = document.getElementById("course").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var message = document.getElementById("message");

    if(name=="" || email=="" || mobile=="" || dob=="" || course=="" || address=="" || password=="" || confirmPassword=="")
    {
        message.innerHTML = "All fields are required.";
        message.style.color = "red";
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email))
    {
        message.innerHTML = "Invalid Email Format.";
        message.style.color = "red";
        return;
    }

    var mobilePattern = /^[0-9]{10}$/;

    if(!mobilePattern.test(mobile))
    {
        message.innerHTML = "Invalid Mobile Number.";
        message.style.color = "red";
        return;
    }

    var digitPattern = /\d/;

    if(!digitPattern.test(password))
    {
        message.innerHTML = "Password must contain at least one digit.";
        message.style.color = "red";
        return;
    }

    if(password !== confirmPassword)
    {
        message.innerHTML = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    message.innerHTML =
    "Registration Successful! Welcome, " + name + ".";
    message.style.color = "green";
}