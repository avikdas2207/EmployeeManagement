validateUser = () => {

    const user = document.getElementById("user").value;
    

    if (user.match(/^[A-Z]{1}[a-z]{2,}/))
    {
        document.getElementById("userError").innerHTML = " ";
    }
    else{
      document.getElementById("userError").innerHTML = "<span style='color: red;'>invalid Username</span>";
    }
  }


  validatePswd = () => {

    const pswd = document.getElementById("password").value;
    const regexPassword = /^(?=.*[0-9])(?=.*[@#$%]{1})(?=.*[A-Z]).{8,}$/;

    if (pswd.match(regexPassword))
    {
        document.getElementById("passwordError").innerHTML = " ";
    }
    else{
      document.getElementById("passwordError").innerHTML = "<span style='color: red;'>invalid Password</span>";
    }
  }