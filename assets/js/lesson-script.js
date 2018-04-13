function Comment(image, name, date, text) {
  this.imageSrc = image;
  this.userName = name;
  this.dateOfPost = date;
  this.text = text;
}

function getLocalComment() {
  let comments = localStorage.getItem("keduComments");

  if(comments != null) {
    return JSON.parse(comments);
  }
  else {
    return [  new Comment("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!"),
              new Comment("assets/images/Portræt-til-Skype.jpg",
                          "Ulla Arnesen",
                          "5-1-2018",
                          "Mine elever var rigtig glade for lektionen :-)")];
  }
}

function setLocalComment(origComments) {
  //converting it to JSON
  let newComments = JSON.stringify(origComments);

  //saving it
  localStorage.setItem("keduComments", newComments);
}

function submitComment(image, name, date, text) {
  let origComments = getLocalComment();

  let newComment = new Comment(image, name, date, text)
  //appending it
  origComments.push(newComment);

  setLocalComment(origComments);
}

function buildList() {
  let comments = getLocalComment();

  let commentsDiv = document.querySelector(".comments");
  commentsDiv.innerHTML = "";

  for(let i = comments.length - 1; i > -1; i--) {
    let pBox = document.createElement("div");
    pBox.classList.add("p-box");

    let flexDiv = document.createElement("div");
    flexDiv.classList.add("flex-div-comment");

    let userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    let userImgDiv = document.createElement("div");
    userImgDiv.classList.add("post-user-img");
    let userImg = document.createElement("img");
    userImg.src = comments[i].imageSrc;

    userImgDiv.appendChild(userImg);
    userInfo.appendChild(userImgDiv);

    let postUser = document.createElement("div");
    postUser.classList.add("post-user");
    postUser.innerHTML = "" + comments[i].userName;

    userInfo.appendChild(postUser);

    let postDate = document.createElement("div");
    postDate.classList.add("post-date");
    postDate.innerHTML = "" + comments[i].dateOfPost;

    userInfo.appendChild(postDate);
    flexDiv.appendChild(userInfo);

    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    let commentText = document.createElement("div");
    commentText.classList.add("text");

    let commentSpan = document.createElement("span");
    commentSpan.innerHTML = comments[i].text;

    commentText.appendChild(commentSpan);
    commentDiv.appendChild(commentText);
    flexDiv.appendChild(commentDiv);
    pBox.appendChild(flexDiv);

    commentsDiv.appendChild(pBox);
  }
}

window.onload = function() {
  buildList();
}

var submitBtn = document.querySelector("#addCommentBtn");

submitBtn.addEventListener("click", function() {
  let userImage = "assets/images/Portræt-til-Skype.jpg";
  let userName = "Mathias Poulsen";
  let time = new Date();
  let date = time.getDate() + "-" + time.getMonth() + "-" + time.getFullYear();
  let text = document.querySelector("#addCommentText");

  submitComment(userImage, userName, date, text.value);

  buildList();

  text.value = "";
});
