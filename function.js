function showDiag(){
    document.getElementById("dateDialog").showModal();
}

function hideDiag() {
  document.getElementById("dateDialog").close();
}

function ageChecker() {
  const userAge = document.getElementById("dateForm").value;

  if (userAge >= 18){
    hideDiag();
    document.body.classList.remove("blur")
  }
  else
    location.assign("http://www.google.com");
}
