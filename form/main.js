function validation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;
    const error_message = document.getElementById("error_message");
    let text;

    error_message.style.padding ="10px";

    if(name.length < 5) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(title.length < 2) {
        text = "Please Enter Valid Title";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 20) {
        text = "Please Enter Enter More Than 20 Character";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}