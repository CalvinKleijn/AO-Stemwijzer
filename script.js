var title = document.getElementById("sw-title");
var body = document.getElementById("sw-body");
var bodyparties = document.getElementById("sw-parties");
var agree =  document.getElementById("agreeButton");
var neither =  document.getElementById("neitherButton");
var disagree =  document.getElementById("disagreeButton");
var skip = document.getElementById("skipButton");
var back = document.getElementById("backButton");
var extra = document.getElementById("extraButton");
var end = document.getElementById("endButton");
var start = document.getElementById("startButton");
var secular = document.getElementById('secularButton');
var size = document.getElementById('sizeButton');
var info = document.getElementById("sw-info");
var line = document.getElementById("sw-line");
var footer = document.getElementById("sw-footer");
var question = 0;
var answer = [];

function loadPage() {
  bodyparties.style.display="none";
  agree.style.display="none";
  neither.style.display="none";
  disagree.style.display="none";
  skip.style.display="none";
  back.style.display="none";
  extra.style.display="none";
  end.style.display="none";
  secular.style.display="none";
  size.style.display="none";
} loadPage()

function agreeSW() {
  nextQuestion();
  var resultpro = answer[question] = "pro";
  console.log(resultpro);
}

function neitherSW() {
  nextQuestion();
}

function disagreeSW() {
  nextQuestion();
  var resultcontra = answer[question] = "contra";
  console.log(resultcontra);
}

function skipSW() {
  nextQuestion();
}

function extraSW() {
  extraWeight();
}

function backSW() {
  backQuestion();
}

function startSW() {
  start.style.display="none";
  info.style.display="none";
  line.style.display="none";
  footer.style.display="none";
  agree.style.display="inline";
  neither.style.display="inline";
  disagree.style.display="inline";
  skip.style.display="inline";
  extra.style.display="inline";
  back.style.display="inline";
  firstQuestion();
}

function secularSW() {
  for (var i = 0; i < parties.length; i++) {
    var secular = parties[i].secular;
    if (secular == true) {
      document.getElementById("partieCheck" + [i]).checked = true;
    }else{
      document.getElementById("partieCheck" + [i]).checked = false;
    }
  }
}

function sizeSW() {
  for (var i = 0; i < parties.length; i++) {
    var size = parties[i].size;
    if (size > 0) {
      document.getElementById("partieCheck" + [i]).checked = true;
    }else{
      document.getElementById("partieCheck" + [i]).checked = false;
    }
  }
}

function firstQuestion() {
  var subject = subjects[question];
  title.innerHTML = question + 1 + '. ' + subjects[question].title;
  body.innerHTML = subject.statement;
}

function nextQuestion() {
  question++

  if (question == 7) {
    end.style.display="inline";
    skip.style.display="none";
  } else {
    var subject = subjects[question];
    title.innerHTML = question + 1 + '. ' + subjects[question].title;
    body.innerHTML = subject.statement;
  }
}

function backQuestion() {
  question--

  var subject = subjects[question];
  title.innerHTML = question + 1 + '. ' + subjects[question].title;
  body.innerHTML = subject.statement;
}

function extraWeight() {
  console.log(+1);
}

function endSW() {
  agree.style.display="none";
  neither.style.display="none";
  disagree.style.display="none";
  skip.style.display="none";
  back.style.display="none";
  extra.style.display="none";
  end.style.display="none";
  body.style.display="none";
  bodyparties.style.display="inline";
  secular.style.display="inline";
  size.style.display="inline";
  title.innerHTML = "Overzicht van de politieke partijen";

  var partieElement = document.createElement('ul');
  document.getElementById('sw-parties').appendChild(partieElement);
  for (var i = 0; i < parties.length; i++) {
    var partieList = document.createElement('li');
    var partieLink = document.createElement('input');
    partieLink.type = "checkbox";
    partieLink.id = "partieCheck" + [i];
    partieElement.appendChild(partieList);
    partieList.appendChild(partieLink);
    partieList.appendChild(document.createTextNode(parties[i].name)); 
    document.getElementById("partieCheck" + [i]).disabled = true; 
  }
}
