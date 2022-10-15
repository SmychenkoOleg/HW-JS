const windowInnerWidth = window.innerWidth;
let w = 100;

function blockWidth1(){
  if (w <= windowInnerWidth-20 ) {
  w++;
  document.querySelector('.out1').style.width = w + 'px';
  console.log(w);
  }
  else{
    alert ('Та достатньо фігнею займатися! Йди роби домашку у Ксендзова! ))))');
    w = 100;
  }
}

function blockWidth2(){
  if (w <= windowInnerWidth-20 ) {
  w++;
  document.querySelector('.out2').style.width = w + 'px';
  console.log(w);
  }
  else{
    alert ('Та достатньо фігнею займатися! Йди роби домашку у Ксендзова! ))))');
    w = 100;
  }
}



  document.querySelector('.out1').addEventListener('mousemove', blockWidth1);
  document.querySelector('.out2').addEventListener('mousemove', blockWidth2);



