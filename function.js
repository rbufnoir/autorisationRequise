function createBlur() {
  var blurStyle = document.createElement("style");
  blurStyle.innerHTML = ".blur :not(#staticBackdrop, #staticBackdrop *) {filter: blur(1.5rem);color: transparent;text-shadow: 0 0 8px #000;}";

  document.body.appendChild(blurStyle);
}

function ageChecker() {
  const today = new Date();
  const birthday = new Date(document.getElementById("dateForm").value);
  let diff = today.getTime() - birthday.getTime();

  if (diff > 3786834240000)
    alert("Erreur!\nVous êtes censés être mort: êtes-vous un vampire? (si oui merci de contacter la fondation SCP)");
  else if (diff > 568036800000){
    $(window).ready(function(){$("#staticBackdrop").modal('hide');});
    document.body.classList.remove("blur");
  }
  else if (diff < 0)
    alert("Erreur!\nParadoxe temporel: vous êtes nés dans le futur");
  else
    location.assign("http://www.google.com");
}

function initPage () {
  document.body.classList.add("blur");
  createBlur();
  $(window).ready(function(){$("#staticBackdrop").modal('show');});
}

initPage();
