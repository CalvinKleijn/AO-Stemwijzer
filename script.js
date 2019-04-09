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

