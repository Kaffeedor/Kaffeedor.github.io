var score=0;
function clicked() {
  console.log("Clicked");
  score++;
  document.getElementById("scoreSpan").innerHTML = score;
  localStorage.setItem('scoreSpan', score)
}
var load_in=0
if(load_in == 0) {
  load_in=1;
  if(localStorage.getItem('scoreSpan') !== null) {
    score = localStorage.getItem('scoreSpan');
    document.getElementById('scoreSpan').innerHTML = score;
  }
}
