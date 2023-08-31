var name = prompt("masukkan nama kamu");
    document.getElementById("nama").innerText=name;


    function validateform() {
        var fullName = document.forms["message-form"]["full-name"].value;
        var birthDate = document.forms["message-form"]["birth-date"].value;
        var gender = document.querySelector('input[name="gender"]:checked');
        var messages = document.forms["message-form"]["messages"].value;

        document.getElementById("sender-full-name").textContent = fullName;
        document.getElementById("sender-birth-date").textContent = birthDate;
        document.getElementById("sender-gender").textContent = gender ? gender.value : "";
        document.getElementById("sender-messages").textContent = messages;

        return false; // Prevent the form from actually submitting
    }