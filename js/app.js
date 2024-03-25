// JQuery start 
$(document).ready(function () {
   const one = $("#one");
   console.log(one.remove());
});

// **********************



document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
 });
 document.querySelector("#show-signup").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
 });
 
 document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
 });
 
 
 
 var Form = document.getElementById("form");
 var Form1 = document.getElementById("form1");
 
 var Login = document.getElementById("login");
 var SignUp = document.getElementById("signup");
 
 SignUp.onclick = function(){
    Form.style.left = "-450px";
    Form.style.opacity = "0";
    // Form.style.scale = "0.001"
    // Form1.style.scale = "1"
    Form1.style.top = "-55vh"
    Form1.style.opacity = "1"
    
 }
 Login.onclick = function(){
    Form.style.left = "0px";
    Form.style.opacity = "1";
    Form.style.scale = "1";
    // Form.style.scale = "0.001";
    // Form1.style.opacity = "0";
    Form.style.left = "0px";
    Form1.style.top = "-5vh"
    Form1.style.opacity = "0"
 }
 

 document.querySelector("#search-bar-button").addEventListener("click", function(){
   document.querySelector(".search-bar").classList.add("strecth");
});
 

// document.querySelector("#search-bar-button .navBar").addEventListener("click", function(){
//    document.querySelector(".search-bar").classList.remove("strecth");
// });
 

/* Profile Start*/

// Declaring HTML elements 

// const imgDiv = document.querySelector('.Profile-container');
// const img = document.querySelector('#photo');
// const file = document.querySelector('#file');
// const uploadBtn = document.querySelector('#uploadBtn');

// // if User hover on img div 

// imgDiv.addEventListener('mouseenter', function(){
//    uploadBtn.style.display = "block";
// });

// // if User hover out from img div 
 
// imgDiv.addEventListener('mouseleave', function(){
//    uploadBtn.style.display = "none";
// });


// //lets work for image showing functionality when we choose an image to upload

// //when we choose a foto to upload

// file.addEventListener('change', function(){
//    // this refers to file
//    const choosedFile = this.files[0];

//    if(choosedFile){
//       const reader = new FileReader(); //FileReader is a predefined function of JS


//       reader.addEventListener('load', function(){
//          img.setAttribute('src', reader.result);
//       });

//       reader.readAsDataURL(choosedFile);
//       //Allright is done

//    }
// });

/* Profile End  */

// To Hide on Jquery

// let el1 = $("#one");
// console.log(el1);

$("#four").on("click", function(){
   var el = $(".gallery").fadeToggle();
   if(!el){
   //   a code that add/return some content to display after the toggle hide some content in the process 
   }

})
$("#login").on("click", function(){
   var el = $(".popup").slideToggle();
})
$(".close-btn").on("click", function(){
   var el = $(".popup").slideToggle();
})

// el1.hide();
