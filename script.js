/*function test(){
  let x=5;
  let y=12;
  console.log ('Перший тест JS ! Добуток чисел 5 на 12 дорівнює', x*y);
}
test();

function unixTyme(){
  let time = Math.floor(new Date().getTime());
  console.log(time);
}
unixTyme();

function randomInt(){
   const min = 10;
   const max = 100;
   let rand = Math.floor(min + Math.random() * (max + 1 - min));
   console.log(rand);
   }
   randomInt();
   randomInt();
   randomInt();
   randomInt();

let counter = 5
function count() {
  counter++;
  console.log(counter);
}
*/
//document.querySelector('.out1').onclick = blockWidth;
//document.querySelector('.out1').addEventListener('wheel',blockWidth);
/*
function showSum (elem, x, y) {
  document.querySelector(elem).textContent = x + y;
};

showSum('.out1', 10, 20)*/












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



