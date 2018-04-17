function Lesson(image, title, text, tag, link) {
  this.imageSrc = image;
  this.title = title;
  this.text = text;
  this.tag = tag.toLowerCase();
  this.link = link;
}

function getLocalLessons() {
  let lessons = localStorage.getItem("keduLessons");

  if(lessons != null) {
    return JSON.parse(lessons);
  }
  else {
    return [  new Lesson("assets/images/introduction.PNG",
                          "Introduktion",
                          "Noget om introduktion",
                          "code",
                          "introduction"),
              new Lesson("assets/images/communication.PNG",
                          "Kommunikation",
                          "Noget om kommunikation",
                          "maths",
                          "communication"),
              new Lesson("assets/images/collaboration.PNG",
                          "Samarbejde",
                          "Noget om samarbejde",
                          "danish",
                          "collaboration"),
              new Lesson("assets/images/creativity.PNG",
                          "Kreativitet",
                          "Noget om kreativitet",
                          "physics",
                          "creativity"),
              new Lesson("assets/images/critical-thinking.PNG",
                          "Critical thinking",
                          "Noget om critical thinking",
                          "code",
                          "critical-thinking"),
              new Lesson("assets/images/introduction.PNG",
                          "Introduktion",
                          "Noget om introduktion",
                          "code",
                          "introduction"),
              new Lesson("assets/images/communication.PNG",
                          "Kommunikation",
                          "Noget om kommunikation",
                          "maths",
                          "communication"),
              new Lesson("assets/images/collaboration.PNG",
                          "Samarbejde",
                          "Noget om samarbejde",
                          "danish",
                          "collaboration"),
              new Lesson("assets/images/creativity.PNG",
                          "Kreativitet",
                          "Noget om kreativitet",
                          "physics",
                          "creativity"),
              new Lesson("assets/images/critical-thinking.PNG",
                          "Critical thinking",
                          "Noget om critical thinking",
                          "code",
                          "critical-thinking"),
              new Lesson("assets/images/critical-thinking.PNG",
                          "Critical thinking",
                          "Noget om critical thinking",
                          "code",
                          "critical-thinking")];
  }
}

function getChecked() {
  let checkboxes = document.querySelectorAll(".check");
  let checked = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      checked.push(checkboxes[i].id);
    }
  }
  return checked;
}

function buildNewLessons() {

}

function buildAllLessons() {
  let checked = getChecked();
  let lessonArray = [];

  for (variable of getLocalLessons()) {
    if (checked.includes(variable.tag)) {
      lessonArray.push(variable);
    }
  }

  var lessons = document.querySelector(".lessons");
  lessons.innerHTML = "";

  for (variable of lessonArray) {
    //console.log(variable.title);

    let a = document.createElement("a");
    a.setAttribute("href", "lesson.html?" + variable.link)

    let lessonBox = document.createElement("div");
    lessonBox.classList.add("lesson-box");

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    lessonBox.appendChild(overlay);

    let lessonImage = document.createElement("img");
    lessonImage.setAttribute("src", variable.imageSrc);
    lessonImage.setAttribute("alt", variable.title)

    lessonBox.appendChild(lessonImage);

    let lessonText = document.createElement("div");
    lessonText.classList.add("lesson-text");

    let lessonTextHead = document.createElement("h3");
    lessonTextHead.innerHTML = variable.title;

    lessonText.appendChild(lessonTextHead);
    //lessonText.innerHTML += variable.text;

    lessonBox.appendChild(lessonText);
    a.appendChild(lessonBox);

    lessons.appendChild(a);

    //console.log(lessonBox);
  }
}

function buildList() {
  buildNewLessons();
  buildAllLessons();
}



window.onload = function() {
  buildList();
}

let codeCheck = document.querySelector("#code");
codeCheck.addEventListener('change', function() {
  buildAllLessons();
});

let mathsCheck = document.querySelector("#maths");
mathsCheck.addEventListener('change', function() {
  buildAllLessons();
});

let danishCheck = document.querySelector("#danish");
danishCheck.addEventListener('change', function() {
  buildAllLessons();
});

let physicsCheck = document.querySelector("#physics");
physicsCheck.addEventListener('change', function() {
  buildAllLessons();
});
