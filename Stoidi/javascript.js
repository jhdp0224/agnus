function vanish(x, y) {
  document.getElementById(x).style.display = y;
}

var code;

while (true) {
  code = prompt('암호 입력 :');
  if (code == 'd3345') {
    break;
  } else if (code == '284') {
    var redirectUrl = 'login.html';
    window.location.href = redirectUrl;
    break;
  }
}
