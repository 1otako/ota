let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');

let OTA = document.querySelector('.OTA');

window.onscroll = function(){
  
  let value = scrollY;
  stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountains3.style.top = value *2 + 'px';
   mountains4.style.top = value *1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value *3 + 'px';
    OTA.style.fontSize = value + 'px';
     if(scrollY >= 70){
           OTA.style.fontSize = 70 + 'px';
           OTA.style.position = 'fixed';
     if(scrollY >= 588){
     OTA.style.display = 'none';
     }else{
      OTA.style.display = 'block';
     }
     
     if (screenY >= 127){
    document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
      } else(document.querySelector('.main').style.background = 'linear-gradient(#20016,#10001f)';
)