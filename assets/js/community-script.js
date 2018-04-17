function Discussion(user, date, title, text, likes, comments, category, link, userImg) {
  this.user = user;
  this.date = date;
  this.title = title;
  this.text = text;
  this.likes = likes;
  this.comments = comments;
  this.category = category;
  this.link = link;
  this.userImg = userImg;
}

function Category(name, text, colorClass) {
  this.name = name;
  this.text = text;
  this.colorClass = colorClass;
}

function getLocalDiscussions() {
  let discussions = localStorage.getItem("keduDiscussions");

  if(discussions != null) {
    return JSON.parse(discussions);
  }
  else {
    return [  new Discussion("Dorte Nielsen",
                          "03-04-2018",
                          "Vores nye kuborobot vil ikke tænde! Den er opladt og opdateret. Hvad gør vi?",
                          "",
                          "8",
                          "15",
                          "kubo-robot",
                          "discussion.html",
                          "assets/images/woman-2.jpg"),
              new Discussion("Mads Hansen",
                          "23-03-2018",
                          "Jeg har kun hørt lidt om KUBO, hvad er det helt præcist den kan?",
                          "",
                          "13",
                          "21",
                          "kubo-robot",
                          "discussion.html",
                          "assets/images/man-1.jpg"),
              new Discussion("Inger Sørensen",
                          "17-03-2018",
                          "Hvordan oplader jeg min Kubo?",
                          "",
                          "2",
                          "5",
                          "kubo-robot",
                          "discussion.html",
                          "assets/images/woman-1.jpg"),
              new Discussion("Lars Larsen",
                          "14-01-2018",
                          "Kodning går over min forstand. Hvad kan man bruge rekursive funktioner til?",
                          "",
                          "18",
                          "35",
                          "kubo-robot",
                          "discussion.html",
                          "assets/images/man-2.jpg"),
              new Discussion("Lis Lauerbæk",
                          "16-04-2018",
                          "Jeg har nogle problemer med min profil indstillinger",
                          "",
                          "0",
                          "3",
                          "kedu-universe",
                          "discussion.html",
                          "assets/images/woman-1.jpg"),
              new Discussion("Erik Nielsen",
                          "05-04-2018",
                          "Velkommen til alle de nye medlemmer! Her er nogle regler som jeg vil bede jer alle om at...",
                          "",
                          "47",
                          "12",
                          "kedu-universe",
                          "discussion.html",
                          "assets/images/man-2.jpg"),
              new Discussion("Lotte Hansen",
                          "22-03-2018",
                          "Hej! Jeg er ny her på siden",
                          "",
                          "3",
                          "20",
                          "kedu-universe",
                          "discussion.html",
                          "assets/images/woman-1.jpg"),
              new Discussion("Katrine Frisk",
                          "18-02-2018",
                          "Hvem skal jeg spørge, hvis jeg gerne vil vide mere om KUBO?",
                          "",
                          "1",
                          "3",
                          "kedu-universe",
                          "discussion.html",
                          "assets/images/woman-2.jpg"),
              new Discussion("Henriette Pedersen",
                          "02-03-2018",
                          "Er det muligt at købe flere TagTiles? Mine elever kom til at ødelægge vores...",
                          "",
                          "15",
                          "12",
                          "kubo-accessories",
                          "discussion.html",
                          "assets/images/woman-1.jpg"),
              new Discussion("Anders Nielsen Sørensen",
                          "28-02-2018",
                          "Hvornår udkommer TagTiles til at lære at stave??",
                          "",
                          "48",
                          "13",
                          "kubo-accessories",
                          "discussion.html",
                          "assets/images/man-1.jpg"),
              new Discussion("Peter Vildberg",
                          "16-02-2018",
                          "Kan man bruge almindelige opladere til KUBO? Eller skal man købe nogen fra deres shop hvis...",
                          "",
                          "2",
                          "3",
                          "kubo-accessories",
                          "discussion.html",
                          "assets/images/man-2.jpg"),
              new Discussion("Gertrud Storm Eriksen",
                          "07-01-2018",
                          "Kan man lave sine egne TagTiles? Eller er det kun dem som følger med som kan bruges?",
                          "",
                          "8",
                          "15",
                          "kubo-accessories",
                          "discussion.html",
                          "assets/images/woman-1.jpg")];
  }
}

function getLocalCategories() {
  let categories = localStorage.getItem("keduCategories");

  if(categories != null) {
    return JSON.parse(categories);
  }
  else {
    return [  new Category("kubo-robot", "KUBO Robotten", "l-blue"),
              new Category("kedu-universe", "KEDU Universet", "green"),
              new Category("kubo-accessories", "KUBO Tilbehør", "blue")];
  }
}

function setLocalDiscussion(origDiscussions) {
  let newDiscussions = JSON.stringify(origDiscussions);

  localStorage.setItem("keduDiscussions", newDiscussions);
}

function submitComment(image, name, date, text) {
  let origDiscussions = getLocalDiscussions();

  let newDiscussion = new Discussion(user, date, title, likes, comments, category, link);

  origComments.push(newComment);

  setLocalComment(origComments);
}

function buildList() {
  let categories = getLocalCategories();
  let discussions = getLocalDiscussions();

  let threadsDiv = document.querySelector(".threads");
  threadsDiv.innerHTML = "";

  for (category of categories) {
    let threadContainer = document.createElement("div");
    threadContainer.classList.add("thread-container");

    let threadHeading = document.createElement("h3");
    threadHeading.setAttribute("id", category.name);
    threadHeading.innerHTML = category.text;

    threadContainer.appendChild(threadHeading);

    for (discussion of discussions) {
      if (category.name == discussion.category) {
        let a = document.createElement("a");
        a.setAttribute("href", discussion.link)

        let threadBox = document.createElement("div");
        threadBox.classList.add("thread-box");
        threadBox.classList.add(category.colorClass);

        let thread = document.createElement("div");
        thread.classList.add("thread");

        let threadUserInfo = document.createElement("div");
        threadUserInfo.classList.add("thread-user-info");

        let userImg = document.createElement("div");
        userImg.classList.add("thread-user-img");

        let img = document.createElement("img");
        img.setAttribute("src", discussion.userImg);
        img.setAttribute("alt", discussion.user);

        userImg.appendChild(img);
        threadUserInfo.appendChild(userImg);

        let threadUser = document.createElement("div");
        threadUser.classList.add("thread-user");

        let threadUserP = document.createElement("p");
        threadUserP.innerHTML = discussion.user;

        threadUser.appendChild(threadUserP);
        threadUserInfo.appendChild(threadUser);

        let threadDate = document.createElement("div");
        threadDate.classList.add("thread-date");

        let threadDateP = document.createElement("div");
        threadDateP.innerHTML = discussion.date;

        threadDate.appendChild(threadDateP);
        threadUserInfo.appendChild(threadDate);
        thread.appendChild(threadUserInfo);

        let threadText = document.createElement("div");
        threadText.classList.add("thread-text");

        let threadTextP = document.createElement("p");
        threadTextP.innerHTML = discussion.title;

        threadText.appendChild(threadTextP);
        thread.appendChild(threadText);

        let commentFavorite = document.createElement("div");
        commentFavorite.classList.add("comment-favorite");

        let favorite = document.createElement("div");
        favorite.classList.add("favorite");

        let favoriteImg = document.createElement("img");
        favoriteImg.setAttribute("src", "assets/images/ic_favorite_white_24px.svg");

        favorite.appendChild(favoriteImg);
        commentFavorite.appendChild(favorite);
        commentFavorite.innerHTML += discussion.likes;

        let comment = document.createElement("div");
        comment.classList.add("comment");

        let commentImg = document.createElement("img");
        commentImg.setAttribute("src", "assets/images/ic_comment_white_24px.svg");

        comment.appendChild(commentImg);
        commentFavorite.appendChild(comment);
        commentFavorite.innerHTML += discussion.comments;
        thread.appendChild(commentFavorite);
        threadBox.appendChild(thread);
        a.appendChild(threadBox);

        threadContainer.appendChild(a);
      }
    }

    threadsDiv.appendChild(threadContainer);
  }
}

window.onload = function() {
  buildList();
}

function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 170);
    }
}

window.addEventListener("hashchange", offsetAnchor);

window.setTimeout(offsetAnchor, 1);

var addPostBtn = document.querySelector("#addPost");

addPostBtn.addEventListener("click", function() {
  window.location.href = "add-discussion.html";
});
