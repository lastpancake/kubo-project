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


function setLocalDiscussion(origDiscussions) {
  let newDiscussions = JSON.stringify(origDiscussions);

  localStorage.setItem("keduDiscussions", newDiscussions);
}

function submitDiscussion(name, date, title, text, category, link, image) {
  let origDiscussions = getLocalDiscussions();

  let newDiscussion = new Discussion(name, date, title, text, 0, 0, category, link, image);

  origDiscussions.unshift(newDiscussion);

  setLocalDiscussion(origDiscussions);
}

var submitBtn = document.querySelector("#postSubmit");

submitBtn.addEventListener("click", function() {
  let postTitle = document.querySelector("#add-post-title").value;
  if (postTitle) {
    let userName = "Mathias Poulsen";
    let time = new Date();
    let date = time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
    let title = postTitle;
    let text = document.querySelector("#postText").value;
    let category = document.querySelector("#postCategory").value;
    let link = "discussion.html";
    let image = "assets/images/man-1.jpg";

    submitDiscussion(userName, date, title, text, category, link, image);

    window.location.href = "community.html";
  }
});
