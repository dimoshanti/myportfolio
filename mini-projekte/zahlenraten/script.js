function rate() {
  let zufallszahl = Math.floor(Math.random() * 10) + 1;
  let raten = parseInt(document.getElementById("number").value);
  if (zufallszahl === raten) {
    document.getElementById("Ergebnis").innerHTML =
      "Richtig geraten! Glückwunsch";
  } else {
    document.getElementById("Ergebnis").innerHTML = "Versuch es nochmal";
  }
}

rate();
