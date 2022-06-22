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

  if (diff > 568036800000){
    hideDiag();
    document.body.classList.remove("blur")
  }
  else
    location.assign("http://www.google.com");
}
