function Discussion() {
  this.user = user;
  this.date = date;
  this.title = title;
  this.likes = likes;
  this.comment = comments;
  this.category = category;
  this.link = link;
}

function Category(name, text) {
  this.name = name;
  this.text = text;
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
                          "8",
                          "15",
                          "kubo-robot",
                          "discussion.html"),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          ""),
              new Discussion("assets/images/Portræt-til-Skype.jpg",
                          "Morten Mortensen",
                          "5-11-2017",
                          "Rigtig god lektion!",
                          "",
                          "",
                          "")];
  }
}

function getLocalCategories() {
  let categories = localStorage.getItem("keduCategories");

  if(categories != null) {
    return JSON.parse(categories);
  }
  else {
    return [  new Category("kubo-robot", "KUBO Robotten"),
              new Category("kedu-universe", "KEDU Universet"),
              new Category("kubo-accessories", "KUBO Tilbehør")];
  }
}
