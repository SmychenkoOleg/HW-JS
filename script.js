
let w = 100;

function blockWidth1(){
  w++;
  document.querySelector('.out1').style.width = w + 'px';
  console.log(w);
}

function blockWidth2(){
  w++;
  document.querySelector('.out2').style.width = w + 'px';
  console.log(w);
}

document.querySelector('.out1').addEventListener('mousemove', blockWidth1);

document.querySelector('.out2').addEventListener('mousemove', blockWidth2);



