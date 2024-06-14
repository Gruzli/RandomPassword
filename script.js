function generatePassword() {
  var length = parseInt(document.getElementById("length").value);
  var notification = document.getElementById("notification");
  
  if (length > 15) {
      notification.innerText = "Password length cannot exceed 15 characters.";
      notification.style.visibility = "visible";
      return;
  } else {
      notification.style.visibility = "hidden";
  }

  var charset = "";
  
  if (document.getElementById("lowercase").checked) {
      charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.getElementById("uppercase").checked) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.getElementById("numbers").checked) {
      charset += "0123456789";
  }
  if (document.getElementById("special").checked) {
      charset += "!@#$%^&*()_+";
  }

  if (charset === "") {
      alert("Please select at least one character set");
      return;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }
  document.getElementById("password").innerText = password;
}
