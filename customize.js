// For Simplicity, I'm referring to SET as 'period 9'.

function setClass(period) {
  let link = prompt("What is your Period " + period + " zoom link? Press 'Cancel' to cancel this action.");
  if (link) {
    localStorage.setItem(period, link);
    alert("Succesfully set " + link + " as your zoom link for Period " + period + "!");
  }
}

function download() {
  let classes = [
    localStorage.getItem(1),
    localStorage.getItem(2),
    localStorage.getItem(3),
    localStorage.getItem(4),
    localStorage.getItem(5),
    localStorage.getItem(6),
    localStorage.getItem(7),
    localStorage.getItem(8),
    localStorage.getItem(9)
  ];

  let downloadLink = document.createElement("a");
  downloadLink.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(classes));
  downloadLink.setAttribute("download", "OCT_2_Schedule.json");
  downloadLink.click();
}

function importSchedule() {
  let importButton = document.createElement("input");
  let schedule;
  importButton.setAttribute("type", "file");
  importButton.addEventListener("change", () => {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let schedule = JSON.parse(reader.result);
      for (let i = 0; i < schedule.length; i++) {
        localStorage.setItem(i + 1, schedule[i]);
      }
      alert("Succesfully imported schedule!");
    });
    reader.readAsText(Array.from(importButton.files)[0]);
  });
  importButton.click();
}