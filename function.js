function showDiag(){
    document.getElementById("dateDialog").showModal();
}

function hideDiag() {
  document.getElementById("dateDialog").close();
}

function ageChecker() {
  const today = new Date();
  const birthday = new Date(document.getElementById("dateForm").value);
  let diff = today.getTime() - birthday.getTime();

  if (diff > 3786834240000)
    alert("Erreur!\nVous êtes censés être mort: êtes-vous un vampire? (si oui merci de contacter la fondation SCP)");
  else if (diff > 568036800000){
    hideDiag();
    document.body.classList.remove("blur")
  }
  else if (diff < 0)
    alert("Erreur!\nParadoxe temporel: vous êtes nés dans le futur");
  else
    location.assign("http://www.google.com");
}
