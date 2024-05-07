// toast function 
function toastNotify(text) {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "green",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


// function with simple if else condition
function ifElse1() {
    let now = new Date();
    let today = now.getDay();

    if (today === 0) {
        toastNotify("It's 'Sunday'");
        return;
    } else if (today === 1) {
        toastNotify("It's  'Monday'");
        return;
    } else if (today === 2) {
        toastNotify("It's 'Tuesday' ");
        return;
    } else if (today === 3) {
        toastNotify("It's 'Wednesday'");
        return;
    } else if (today === 4) {
        toastNotify("It's  'Thursday'");
        return;
    } else if (today === 5) {
        toastNotify("It's 'Friday'");
        return;
    } else {
        toastNotify("It's 'Saturday'");
    }

}


// same fuction with switch condition
function switch1() {
    switch (new Date().getDay()) {
        case 0:
            today = "Today is 'Sunday'";
            break;
        case 1:
            today = "Today is 'Monday'";
            break;
        case 2:
            today = "Today is 'Tuesday'";
            break;
        case 3:
            today = "Today is 'Wednesday'";
            break;
        case 4:
            today = "Today is 'Thursday'";
            break;
        case 5:
            today = "Today is 'Friday'";
            break;
        default:
            today = "Today is 'Saturday'";
            break;
    }
    toastNotify(today)

}


// keep asking name
function askingName() {

    do {
        var  name = prompt("Your Name Please");
        name = name ? name.trim(): ""; 
    }  while (name === ""); 
    document.getElementById("output").innerHTML = name;
}

function clearOutput() {
    document.getElementById("output").innerHTML = ""
}