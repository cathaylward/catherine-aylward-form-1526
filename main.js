// DECLARING VARIABLES 
// Declare variables that will store references for 
// <input type="button" id="submit-button">,
let btn = document.getElementById("submit-btn");

// <input type="text" id="fullname">,
let fullname = document.getElementById("fullname");

// <input type="text" id="email">
let email = document.getElementById("email");

// <textarea id="message"></textarea>
let message = document.getElementById("message");

// Declare variable that will 
// store regular expression for email

// READY TO START CODING
// Start with your function here
function formValidation() {
    // (come up with the meaningful name).
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    let formData = {};
    // Declare array that will store the errors
    let errors = [];
    //    +-----------+    
    //    | FULL NAME |
    //    +-----------+
    // Check if fullname is not empty.
    if (fullname.value !== "") {
        // If so:
        // Pass the collected value to your object "data".
        formData.fullname = fullname.value;
    } else {
        // Otherwise:
        // Create a corresponding error-message and add it to your array "errors".
        errors.push("Full name is missing");

    }
    // End your conditional here.

    //    +-------+    
    //    | EMAIL | 
    //    +-------+
    // Check if email is not empty.
    if (email.value !== "") {
        // Check if email is valid.
        let validation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (email.value.match(validation)) {
            formData.email = email.value;
        } else {
            // Otherwise:
            // Create a corresponding error-message
            // and add it to your array "errors".
            // End your nested conditional here.
            errors.push("Email is invalid");
        }
    } else {
        // Otherwise:
        // Create a corresponding error-message
        // and add it to your array "errors"
        errors.push("Email is missing");
    }
    // End your outer conditional here.

    //
    //    +---------+    
    //    | MESSAGE | 
    //    +---------+
    // Check if message is not empty.
    if (message.value !== "") {
        // If so:
        // Pass the collected value to your object "data".
        formData.message = message.value;
    } else {
        // Otherwise:
        // Create a corresponding error-message and add it to your array "errors"
        errors.push("Message name is missing")
        // End your conditional here.
    }

    //    +-----------------+
    //    | FEEDBACK/ERRORS |
    //    +-----------------+
    // Check if there is anything in array errors
    if (errors.length !== 0) {
        // If so: 
        // Print it in JavaScript console.
        for (error in errors) {
            console.log(errors[error]);
        }
    } else {
        // Otherwise:
        // Print the data in JavaScript console.
        console.log(formData);
        // Clear text-fields
        fullname.value = "";
        email.value = "";
        message.value = "";
    }
    // End your conditional here.
}
// Close your function here

// Register your form to "click" event.
btn.addEventListener("click", formValidation);

btn.addEventListener("click", function (e) {
    e.preventDefault()
});
