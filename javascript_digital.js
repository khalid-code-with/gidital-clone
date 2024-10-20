

document.getElementById('btn').addEventListener('click', function() {
    var inputField = document.getElementById('input_field_ee').value;

    if (inputField.trim() === "") {
        document.getElementById('show_error').style.display = 'block';
    } else {
        document.getElementById('show_error').style.display = 'none';
    }
   if(inputField.length>=15)
   {
    setTimeout(function()
{
var fed=document.getElementById("feedback");
fed.style.display="block";
},300);
   }
});
// image click event program here
var imgClick = document.getElementById("img_click");
var hiddenContent = document.getElementById("hidden");

imgClick.addEventListener("click", function() {
    hiddenContent.style.display = "block";
});

imgClick.addEventListener("mouseout", function() {
    hiddenContent.style.display = "none";
});
// ================================================================

var input = document.getElementById("button_sing");
input.addEventListener("click", function() {
    var inputField = document.getElementById("input_field");
    inputField.placeholder = "";
    
    if (inputField.value.trim() === "") {
        var d = document.getElementById("field_e");
        d.style.display = "block"; // Show the error message if the field is empty
    } 
    else {
        var thanks = document.getElementById("thanking_show");
        thanks.style.display = "block"; // Show the thank you message
        
        // Hide the input field after successful submission
        // inputField.style.display = "none";
        // input.style.display = "none";
        document.getElementById("field_e").style.display = "none"; // Hide the error message if any
        document.querySelector("text").style.display="none";
    }
});



var btn = document.getElementById("btn_submit");
btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting by default

    var isValid = true;

    var nameField = document.getElementById("nameField");
    var errorMsg = document.getElementById("errorMsg");
    if (nameField.value.trim() === "") {
        errorMsg.style.display = "block";
        isValid = false;
    } else {
        errorMsg.style.display = "none";
    }

    var companyField = document.getElementById("company_field");
    var errorCompany = document.getElementById("error_company");
    if (companyField.value.trim() === "") {
        errorCompany.style.display = "block";
        isValid = false;
    } else {
        errorCompany.style.display = "none";
    }

    var emailField = document.getElementById("email_field");
    var errorEmail = document.getElementById("error_email");
    if (emailField.value.trim() === "") {
        errorEmail.style.display = "block";
        isValid = false;
    } else {
        errorEmail.style.display = "none";
    }

    var mobileField = document.getElementById("mobile_field");
    var errorMobile = document.getElementById("error_mobile");
    if (mobileField.value.trim() === "") {
        errorMobile.style.display = "block";
        isValid = false;
    } else {
        errorMobile.style.display = "none";
    }

    var textareaField = document.getElementById("message");
    var errorTextarea = document.getElementById("error_textara");
    if (textareaField.value.trim() === "") {
        errorTextarea.style.display = "block";
        isValid = false;
    } else {
        errorTextarea.style.display = "none";
    }

    if (isValid) {
        // If all fields are valid, hide the form and show the thank you message
         var c=document.getElementById("main_container_item").style.display = "none";
        document.getElementById("thankings").style.display = "block";
    }
});

// ===========================================================
