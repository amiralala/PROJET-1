function validateForm() {
    let x = document.forms[0]["name"].value;
    if (x == "ironhack") {
      alert("I am ironhack");
      return false;
    }
  }