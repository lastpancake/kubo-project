function Lesson(image, title, text, tag, link) {
  this.imageSrc = image;
  this.title = title;
  this.text = text;
  this.tag = tag.toLowerCase();
  this.link = link;
}

function getLocalLessons() {
  var lessons = localStorage.getItem("keduLessons");

  if(lessons != null) {
    return JSON.parse(lessons);
  }
  else {
    return [  new Lesson("assets/images/introduction.png",
                          "Introduktion",
                          "Noget om introduktion",
                          "code",
                          "introduction"),
              new Lesson("assets/images/communication.png",
                          "Kommunikation",
                          "Noget om kommunikation",
                          "maths",
                          "communication"),
              new Lesson("assets/images/collaboration.png",
                          "Samarbejde",
                          "Noget om samarbejde",
                          "danish",
                          "collaboration"),
              new Lesson("assets/images/creativity.png",
                          "Kreativitet",
                          "Noget om kreativitet",
                          "physics",
                          "creativity"),
              new Lesson("assets/images/critical-thinking.png",
                          "Critical thinking",
                          "Noget om critical thinking",
                          "code",
                          "critical-thinking"),
              new Lesson("assets/images/introduction.png",
                          "Introduktion",
                          "Noget om introduktion",
                          "code",
                          "introduction"),
              new Lesson("assets/images/communication.png",
                          "Kommunikation",
                          "Noget om kommunikation",
                          "maths",
                          "communication"),
              new Lesson("assets/images/collaboration.png",
                          "Samarbejde",
                          "Noget om samarbejde",
                          "danish",
                          "collaboration"),
              new Lesson("assets/images/creativity.png",
                          "Kreativitet",
                          "Noget om kreativitet",
                          "physics",
                          "creativity"),
              new Lesson("assets/images/critical-thinking.png",
                          "Critical thinking",
                          "Noget om critical thinking",
                          "code",
                          "critical-thinking")];
  }
}

function getChecked() {
  var checkboxes = document.querySelectorAll(".check");
  var checked = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      checked.push(checkboxes[i].id);
    }
  }
  return checked;
}

function buildNewLessons() {

}

function buildAllLessons() {
  var checked = getChecked();
  var lessonArray = [];

  for (variable of getLocalLessons()) {
    if (checked.includes(variable.tag)) {
      lessonArray.push(variable);
    }
  }

  var lessons = document.querySelector(".lessons");
  lessons.innerHTML = "";

  for (variable of lessonArray) {
    //console.log(variable.title);

    var a = document.createElement("a");
    a.setAttribute("href", "lesson.html?" + variable.link)

    var lessonBox = document.createElement("div");
    lessonBox.classList.add("lesson-box");

    var lessonImage = document.createElement("img");
    lessonImage.setAttribute("src", variable.imageSrc);

    lessonBox.appendChild(lessonImage);

    var lessonText = document.createElement("div");
    lessonText.classList.add("lesson-text");

    var lessonTextHead = document.createElement("h3");
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

var codeCheck = document.querySelector("#code");
codeCheck.addEventListener('change', function() {
  buildAllLessons();
});

var mathsCheck = document.querySelector("#maths");
mathsCheck.addEventListener('change', function() {
  buildAllLessons();
});

var danishCheck = document.querySelector("#danish");
danishCheck.addEventListener('change', function() {
  buildAllLessons();
});

var physicsCheck = document.querySelector("#physics");
physicsCheck.addEventListener('change', function() {
  buildAllLessons();
});
