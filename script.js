// Fortschritt speichern in local storage
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    localStorage.setItem(this.id, this.checked);
  });
});

// Fortschritt wiederherstellen
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    const checked = localStorage.getItem(checkbox.id) === "true";
    checkbox.checked = checked;
  });
});

// Fortschrittsbalken aktualisieren
function updateProgress() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checked = Array.from(checkboxes).filter((checkbox) => checkbox.checked);
  const progressBar = document.getElementById("progressBar");
  progressBar.value = checked.length;
}

// Bei Änderungen Fortschrittsbalken aktualisieren
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", updateProgress);
});

// Fortschrittsbalken beim Laden der Seite aktualisieren
document.addEventListener("DOMContentLoaded", updateProgress);
