function message() {
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
}

if (Name.value === '' || email.value === '' || msg.value === '') {

    alert("Your message has been received, thank you!");
    return false
}
else {
    alert("Please complete")
}




