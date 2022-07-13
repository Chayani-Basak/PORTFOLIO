const loader=document.querySelector('.loader')
window.onload=function loading(){
    setTimeout( function(){
        loader.style.transform="translateY(-100%)";
        page.style.opacity=1
    } , 300)
    setTimeout( function() {
        tl.fromTo('header', {opacity: 0, y: "-30%"} , {opacity: 1 , y: "0%", duration: 0.65})
        tl.fromTo('.landing-p', {opacity: 0, y: "-20%"} , {opacity: 1 , y: "0%", duration: 0.65})
        tl.fromTo('#begins', {opacity: 0, y: "-20%"} , {opacity: 1 , y: "0%", duration: 0.65})
        tl.fromTo('.main-btn', {opacity: 0, y: "40%"} , {opacity: 1 , y: "0%", duration: 0.8})
    } , 1700)
}
document.querySelector('.right').addEventListener('click', function(){
      rightSlider()
});
document.querySelector('.left').addEventListener('click', function(){
      leftSlider()
});
function rightSlider(){
      document.querySelector('.welcome-part').classList.add('forward');
      document.querySelector('.welcome-part').classList.remove('back');
      document.querySelector('.about').classList.remove('not-visible');
      document.querySelector('.about').classList.add('back');
      document.querySelector('.about').classList.remove('forward');
      document.querySelector('.right').classList.add('colored');
      document.querySelector('.left').classList.remove('colored');
}
function leftSlider(){
      document.querySelector('.welcome-part').classList.toggle('forward');
      document.querySelector('.welcome-part').classList.toggle('back');
      document.querySelector('.about').classList.toggle('forward');
      document.querySelector('.about').classList.toggle('back');
      document.querySelector('.right').classList.toggle('colored');
      document.querySelector('.left').classList.toggle('colored');
}
if (window.matchMedia("(max-width: 500px)").matches){
      $(".show-link").click(function(){
      for(var i=3; i<9; i++){
          if(document.querySelector(".EducationSkills-" + i).style.display==="none"){
              document.querySelector(".EducationSkills-" + i).style.display="block";
              document.querySelector(".EducationSkills-2").style.marginRight="0px";
              $(".more").addClass("toggle");
              $(".less").removeClass("toggle");
          } 
          else{
              document.querySelector(".EducationSkills-" + i).style.display="none";
              document.querySelector(".EducationSkills-2").style.marginRight = "90px";
              $(".more").removeClass("toggle");
              $(".less").addClass("toggle");
          }
        }
      });
} 
else{
      $(".show-link").click(function(){
      for(var i=3; i<9; i++){
          if(document.querySelector(".EducationSkills-" + i).style.display==="none"){
               document.querySelector(".EducationSkills-" + i).style.display="block";
               document.querySelector(".EducationSkills-2").style.marginLeft="0px";
               $(".more").addClass("toggle");
               $(".less").removeClass("toggle");
          } 
          else{
               document.querySelector(".EducationSkills-" + i).style.display="none";
               document.querySelector(".EducationSkills-2").style.marginLeft="60px";
               $(".more").removeClass("toggle");
               $(".less").addClass("toggle");
          }
      }
   });
}
document.querySelector('.nav-icon').addEventListener('click', function(){
        document.querySelector('.menu').classList.add('opened');
        document.querySelector('.menu').classList.remove('closed');
        document.querySelector('.close').style.display='block';
});
document.querySelector('.close').addEventListener('click', function(){
       document.querySelector('.menu').classList.remove('opened');
       document.querySelector('.menu').classList.add('closed');
       document.querySelector('.close').style.display='none';
});
