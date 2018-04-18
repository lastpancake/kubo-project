function DiscussionComment(image, name, date, text) {
  this.imageSrc = image;
  this.userName = name;
  this.dateOfPost = date;
  this.text = text;
}

function getLocalDiscussionComment() {
  let comments = localStorage.getItem("discussionComments");

  if(comments != null) {
    return JSON.parse(comments);
  }
  else {
    return [  new DiscussionComment("assets/images/man-1.JPG",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Godt spørgsmål!"),
              new DiscussionComment("assets/images/woman-2.JPG",
                          "Ulla Arnesen",
                          "5-1-2018",
                          "Jeg lytter lige med")];
  }
}

function setLocalComment(origComments) {
  let newComments = JSON.stringify(origComments);

  localStorage.setItem("discussionComments", newComments);
}

function submitComment(image, name, date, text) {
  let origComments = getLocalDiscussionComment();

  let newComment = new DiscussionComment(image, name, date, text);

  origComments.push(newComment);

  setLocalComment(origComments);
}

function buildList() {
  let comments = getLocalDiscussionComment();

  let commentsDiv = document.querySelector(".comments-discussion");
  commentsDiv.innerHTML = "";

  for(let i = 0; i < comments.length; i++) {
    let pBox = document.createElement("div");
    pBox.classList.add("p-box");

    let flexDiv = document.createElement("div");
    flexDiv.classList.add("flex-div-comment");

    let userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    let userImgDiv = document.createElement("div");
    userImgDiv.classList.add("post-user-img");
    let userImg = document.createElement("img");
    userImg.setAttribute("alt", comments[i].userName);
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
  let userImage = "assets/images/man-1.JPG";
  let userName = "Mathias Poulsen";
  let time = new Date();
  let date = time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
  let text = document.querySelector("#addCommentText");

  submitComment(userImage, userName, date, text.value);

  buildList();

  text.value = "";
});
