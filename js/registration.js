 validateFname = () => {

    const fname = document.getElementById("fname").value;
    

    if (fname.match(/^[A-Z]{1}[a-z]{2,}/))
    {
        document.getElementById("fnameError").innerHTML = " ";
    }
    else{
      document.getElementById("fnameError").innerHTML = "<span style='color: red;'>invalid Name</span>";
    }
  }


  validateEmail = () => {

    const email = document.getElementById("email").value;
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(regexEmail))
    {
        document.getElementById("emailError").innerHTML = " ";
    }
    else{
      document.getElementById("emailError").innerHTML = "<span style='color: red;'>invalid Email</span>";
    }
  }

  validateAddress = () => {

    const address = document.getElementById("address").value;
    const regexAdd = /^[a-zA-Z0-9]/;

    if (address.match(regexAdd))
    {
        document.getElementById("addressError").innerHTML = " ";
    }
    else{
      document.getElementById("addressError").innerHTML = "<span style='color: red;'>invalid Address</span>";
    }
  }

  validatePhone = () => {

    const phone = document.getElementById("phone").value;
    const regexPhone = /^\(?([0-9]{2})\)?[ ]?([0-9]{10})/;

    if (phone.match(regexPhone))
    {
        document.getElementById("phoneError").innerHTML = " ";
    }
    else{
      document.getElementById("phoneError").innerHTML = "<span style='color: red;'>invalid Phone Number</span>";
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
  