//Show the form on the foreground
function showDiag() {
    document.getElementById("dateDialog").showModal();
}

//Hide the form
function hideDiag() {
  document.getElementById("dateDialog").close();
}


//Inject html in the body to create the form
function createDiag() {
  if (!document.getElementById("dateDialog")) {
    var dialogForm = document.createElement("dialog");
    dialogForm.id = "dateDialog";
    dialogForm.innerHTML = "<form name=\"dateCheck\"><input id=\"dateForm\" type=\"date\"><input type=\"button\" value=\"Submit\" onclick=\"ageChecker()\"></form>";

    document.body.classList.add("blur");
    document.body.appendChild(dialogForm);
  }
  createBlur();
  showDiag();
}

function createBlur() {
  var blurStyle = document.createElement("style");
  blurStyle.innerHTML = ".blur {filter: blur(1.5rem);color: transparent;text-shadow: 0 0 8px #000;}";

  document.body.appendChild(blurStyle);
}

//Compare the birthday and today's date to determine if the user is an adult
function ageChecker() {
  const today = new Date();
  const birthday = new Date(document.getElementById("dateForm").value);
  let diff = today.getTime() - birthday.getTime();

  if (diff > 3786834240000)
    alert("Erreur!\nVous êtes censés être mort: êtes-vous un vampire? (si oui merci de contacter la fondation SCP)");
  else if (diff > 568036800000){
    hideDiag();
    document.getElementById("dateDialog").remove();
    document.body.classList.remove("blur");
  }
  else if (diff < 0)
    alert("Erreur!\nParadoxe temporel: vous êtes nés dans le futur");
  else
    location.assign("http://www.google.com");
}

window.addEventListener("load", createDiag);
window.addEventListener("keyup", showDiag);
