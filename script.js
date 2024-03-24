// code functions
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function zoomin(img_id, zoom_val){
    var myImg = document.getElementById(img_id);
    var currWidth = myImg.clientWidth;
    myImg.style.width = (currWidth - zoom_val) + "px";
}

function zoomout(img_id), zoom_val{
    var myImg = document.getElementById(img_id);
    var currWidth = myImg.clientWidth;
    myImg.style.width = (currWidth + zoom_val) + "px";
}


// website functions
var score = 0;
function clicked() {
  score++;
  document.getElementById("scoreSpan").innerHTML = score;
  localStorage.setItem('scoreSpan', score);
  zoomin("redbutton", 3);
  sleep(50);
  zoomout("redbutton", 3);
}


// load in
var load_in = false;

if (load_in == false) {
  load_in = true;
  if (localStorage.getItem('scoreSpan') !== null) {
    score = localStorage.getItem('scoreSpan');
    document.getElementById('scoreSpan').innerHTML = score;
  }
}
