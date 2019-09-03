
// get the contact button 
let contactbtn = document.getElementById("contactbtn");

//this hide the cv and display the form.
contactbtn.addEventListener("click", function() {
    let cv = document.getElementById("cv");
    let myform = document.getElementById("myform");
    cv.style.display = "none";
    myform.style.display = "block";

});

// get the form input
let firstName = document.getElementById("name");
let mail = document.getElementById("mail1");
let message = document.getElementById("msg");
let subbtn = document.getElementById("subbtn");
let title = document.getElementById("user_title");


// checking for if input is correct
subbtn.addEventListener("click", function (event) {
    event.preventDefault();
    
    if (firstName.value.length < 4 || message.value.length < 21) {
        let myform = document.getElementById("myform");
        let messagediv = document.createElement("div");
        messagediv.innerHTML = "<h4>please input valid name or add more comment</h4>";
        messagediv.style.color = "red";
        myform.appendChild(messagediv);
    } else {
        
        let myform = document.getElementById("myform");
        let messagediv = document.createElement("div");
        messagediv.innerHTML = `<h4>${title.value} ${firstName.value} thank you</h4>`;
        messagediv.style.color = "green";
        myform.appendChild(messagediv);
        let backbtn = document.createElement("button");
        backbtn.textContent = "Back to CV";
        backbtn.className = "backbtn";
        myform.appendChild(backbtn)
        // craete button to take back to cv page
        backbtn.addEventListener("click", function () {
            let cv = document.getElementById("cv");
            cv.style.display = "block";
            let myform = document.getElementById("myform");
            myform.style.display = "none";
            firstName.value = "";
            message.value = "";
            mail.value = "";
            title.value = "select-title"
            backbtn.style.display = "none";
            messagediv.style.display = "none";

        })
    }
    
    
})





