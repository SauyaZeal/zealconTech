var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
var IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null));
var IS_IOS =  IS_IPAD || IS_IPHONE;
var IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null;
//var IS_CHROME_ON_ANDROID = IS_ANDROID && navigator.userAgent.match(/Version\/\d+\.\d+/i) == null;              
var IS_MOBILE = IS_IOS || IS_ANDROID;
  
function toggleClass(element, classname) {    
  if (element.className != classname) {
    element.className = classname
      } 
  else{
    element.className = "";
  };
};  

function removeClasses(element) {
  element.className = "";    
};

function activateMenuIcon(body, layout, menuIcon) {
  menuIcon.onclick = function(e) {
    //toggleClass(body, "menu-overflow"); 
    e.stopPropagation(); 
    
    toggleClass(body,"hidden close");
    toggleClass(menuIcon, "close");
    $(".menu-container").toggleClass("menu-hidden menu-visible");
  };
  /*
  layout.onclick = function(e) {
  removeClasses(body);
  toggleClass(menuIcon, "close");
};
  */
};


$( document ).ready(function() {
  var body = document.body;
  var layout = document.getElementById("layout");
  var menuIcon = document.getElementById("menu-icon");
  activateMenuIcon(body, layout, menuIcon);  
  
  $("#scrolldownicon, #voteNow").click(function(){
    $('html,body').animate({
      scrollTop: $("#first").offset().top}, 1500);
  }); 
  
  
  $("#scrolldowniconInvite").click(function(){   
    $('html,body').animate({scrollTop: $("#steps").offset().top}, 1500);     
  });
   $("#voteNowInvite").click(function(){   
     if(!IS_MOBILE) {
       $('html,body').animate({scrollTop: $("#steps").offset().top}, 1500);
     }   
  }); 
  
  $("#voteNowStart, #scrolldowniconStart").click(function(){
    $('html,body').animate({scrollTop: $("#bg").offset().top}, 1500);
  });
  
  
});


