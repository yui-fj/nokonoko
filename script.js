// JavaScript
// console.log(document.getElementById('myColor').value);
// document.getElementById('bodyText').textContent = document.getElementById('myColor').value;

//定数の宣言
const color = document.getElementById('mycolor');
const text = document.getElementById('bodytext');

function changeColor(){
    // カラーコードを表示
      text.textContent = color.value;
      document.body.style.backgroundColor = color.value;
    }

    color.addEventListener('input', changeColor);
