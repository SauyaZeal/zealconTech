
$( document ).ready(function() {
   
  
  setValues();
  
  $( window ).resize(function() {
    setValues();
  });
  
  
  
  
  var Bubble2 = $('.Bubble2'),
      Bubble3 = $('.Bubble3'),
      Bubble4 = $('.Bubble4'),
      Bubble6 = $('.Bubble6'),
      Bubble6c = $('.Bubble6c'),
      Bubble6Avatare = $('.Bubble6_avatare'),
      Avatar1 = $('.avatar1'),
      Avatar2 = $('.avatar2'),
      Avatar3 = $('.avatar3'),
      Avatar4 = $('.avatar4'),
      Avatar5 = $('.avatar5'),
      Avatar6 = $('.avatar6'),
      smallBubbles = $('#smallBubbles'),
      MessageContainer = $('.message_container'),
      MessageContainer2 = $('.message_container2'),
      changeTextPosition = $('.changeTextPosition'),
      typing = $('.typing'),
      pin = $('#pin'),
      message1Animation=false,
      message2Animation=false;
  
  
  
  
  $( window ).scroll(function() {
    
    positionY =  (window.pageYOffset  || doc.scrollTop);
    if(windowWidth>890){  
      //Content changes
      if(positionY<=250+scrollDiff){
        Bubble4.css("background-color", "#BF6F0090");    
        Bubble4.css("height", "120px");    
        Bubble4.css("width", "120px"); 
        Bubble2.css("height","180px");
        Bubble2.css("width","180px");
        Bubble2.css("background-color", "#BF6F0090"); 
        Bubble3.css("height","250px");
        Bubble3.css("width","250px");
        Bubble3.css("background-color", "#BF6F0090"); 
        Bubble6c.fadeOut(); 
      }  
      else if((positionY>250+scrollDiff)&&(positionY<=360+scrollDiff)){  
        Bubble2.css("height","180px");
        Bubble2.css("width","180px");
        Bubble2.css("background-color", "#BF6F0090"); 
        Bubble3.css("height","250px");
        Bubble3.css("width","250px");
        Bubble3.css("background-color", "#BF6F0090"); 
        Bubble6c.fadeOut(); 
        
        
        
        Bubble4.css("background-color", "#BF6F0090");    
        Bubble4.css("height", "100px");    
        Bubble4.css("width", "100px"); 
      }
      else if((positionY>360+scrollDiff)&&(positionY<=500+scrollDiff)){
        Bubble3.css("height","250px");
        Bubble3.css("width","250px");
        Bubble3.css("background-color", "#BF6F0090");
        Bubble6c.fadeOut();
        
        
        
        Bubble2.css("height","220px");
        Bubble2.css("width","220px");
        Bubble2.css("background-color", "#0060DB90");   
        Bubble4.css("background-color", "#BF6F0090");    
        Bubble4.css("height", "100px");    
        Bubble4.css("width", "100px");  
      }
      else if((positionY>500+scrollDiff)&&(positionY<=550+scrollDiff)){
        Bubble6c.fadeOut();
        Bubble6.delay(3000).addClass("newBubble off");   
        Bubble6c.css("top","300px");
        Bubble6c.css("left","400px");  
        
        
        
        
        Bubble3.css("height","140px");
        Bubble3.css("width","140px");
        Bubble3.css("background-color", "#0060DB90");   
        Bubble2.css("height","220px");
        Bubble2.css("width","220px");
        Bubble2.css("background-color", "#0060DB90");   
        Bubble4.css("background-color", "#0060DB90");    
        Bubble4.css("height", "100px");    
        Bubble4.css("width", "100px"); 
        
      }
      else if((positionY>550+scrollDiff)&&(positionY<=700+scrollDiff)){
        Bubble6.delay(3000).addClass("newBubble off");    
        Bubble6c.css("top","300px");
        Bubble6c.css("left","400px");
        Bubble6c.fadeOut();
        
        
        
        typing.removeClass("display off");
        Bubble3.css("height","140px");
        Bubble3.css("width","140px");
        Bubble3.css("background-color", "#0060DB90");   
        Bubble2.css("height","220px");
        Bubble2.css("width","220px");
        Bubble2.css("background-color", "#0060DB90");   
        Bubble4.css("background-color", "#0060DB90");    
        Bubble4.css("height", "100px");    
        Bubble4.css("width", "100px");     
      }
      else if((positionY>700+scrollDiff)&&(positionY<=1100+scrollDiff)){
        Bubble6c.fadeOut();
        Bubble6.delay(3000).addClass("newBubble off");  
        
        
        typing.removeClass("display off");  
        Bubble3.css("height","140px");
        Bubble3.css("width","140px");
        Bubble3.css("background-color", "#0060DB90");   
        Bubble2.css("height","220px");
        Bubble2.css("width","220px");
        Bubble2.css("background-color", "#0060DB90");   
        Bubble4.css("background-color", "#0060DB90");    
        Bubble4.css("height", "100px");    
        Bubble4.css("width", "100px"); 
      }
      else if((positionY>1100+scrollDiff)&&(positionY<=1400+scrollDiff)){
        Bubble6c.fadeIn();
        changeTextPosition.removeClass("middle");
        changeTextPosition.addClass("bottom");
        Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");});         
        setTimeout(function(){Avatar1.removeClass("display off");Avatar1.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar1Animation = true;})}, 500);
        setTimeout(function(){Avatar2.removeClass("display off");Avatar2.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar2Animation = true;})}, 1000);
        setTimeout(function(){Avatar3.removeClass("display off");Avatar3.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar3Animation = true;})}, 800);
        setTimeout(function(){Avatar4.removeClass("display off");Avatar4.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar4Animation = true;})}, 1100);
        setTimeout(function(){Avatar5.removeClass("display off");Avatar5.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar5Animation = true;})}, 1300);
        setTimeout(function(){Avatar6.removeClass("display off");Avatar6.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar6Animation = true;})}, 1500);
        
        Bubble3.css("height","140px");
        Bubble3.css("width","140px");
        Bubble3.css("background-color", "#0060DB90");   
        Bubble2.css("height","220px");
        Bubble2.css("width","220px");
        Bubble2.css("background-color", "#0060DB90");   
        Bubble4.css("background-color", "#0060DB90");    
        Bubble4.css("height", "100px");    
        Bubble4.css("width", "100px"); 
      }
      else if((positionY>1400+scrollDiff)&&(positionY<=1700+scrollDiff)){
        Bubble6.css("height","250px");
        Bubble6.css("width","250px");
        Bubble6Avatare.css("top","-30px");
        MessageContainer.addClass("display off");
        MessageContainer2.addClass("display off").css("top", "360px");
        Avatar4.removeClass('spin2').css({"top":"120px", "left":"50px", "height":"70px", "width":"70px"});
        Avatar5.removeClass('spin2').css({"top":"60px", "left":"100px", "height":"70px", "width":"70px"});
        Avatar6.removeClass('spin').css({"top":"120px", "left":"170px"});   
        message1Animation=message2Animation=false;
        pin.addClass("display off");
        
        
        Bubble3.css("height","160px");
        Bubble3.css("width","140px");
        Bubble3.css("background-color", "#0060DB90");   
        Bubble2.css("height","220px");
        Bubble2.css("width","220px");
        Bubble2.css("background-color", "#0060DB90");   
        Bubble4.css("background-color", "#0060DB90");    
        Bubble4.css("height", "100px");    
        Bubble4.css("width", "100px");      
        Bubble6c.fadeIn();
        changeTextPosition.removeClass("middle");
        changeTextPosition.addClass("bottom");
        Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");});         
        setTimeout(function(){Avatar1.removeClass("display off");Avatar1.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar1Animation = true;})}, 500);
        setTimeout(function(){Avatar2.removeClass("display off");Avatar2.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar2Animation = true;})}, 1000);
        setTimeout(function(){Avatar3.removeClass("display off");Avatar3.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar3Animation = true;})}, 800);
        setTimeout(function(){Avatar4.removeClass("display off");Avatar4.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar4Animation = true;})}, 1100);
        setTimeout(function(){Avatar5.removeClass("display off");Avatar5.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar5Animation = true;})}, 1300);
        setTimeout(function(){Avatar6.removeClass("display off");Avatar6.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar6Animation = true;})}, 1500);
      }    
      else if((positionY>1700+scrollDiff)&&(positionY<=2400+scrollDiff)){      
        Bubble6.removeClass('spin main-avatar');
        Bubble6.css("height","300px");
        Bubble6.css("width","300px");
        Avatar4.removeClass('spin2').css({"top":"120px", "left":"50px", "height":"70px", "width":"70px"});
        Avatar5.removeClass('spin2').css({"top":"60px", "left":"100px", "height":"70px", "width":"70px"});
        Avatar6.removeClass('spin').css({"top":"120px", "left":"170px"});       
        Bubble6Avatare.fadeIn('slow');  
        
        
        
        Bubble6.css("height","300px");
        Bubble6.css("width","300px");      
        Bubble6c.fadeIn();
        Bubble6Avatare.css("top","0px");
        changeTextPosition.removeClass("middle");
        changeTextPosition.addClass("bottom");
        Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");});   
        setTimeout(function(){Avatar1.removeClass("display off");Avatar1.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar1Animation = true;})}, 500);
        setTimeout(function(){Avatar2.removeClass("display off");Avatar2.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar2Animation = true;})}, 1000);
        setTimeout(function(){Avatar3.removeClass("display off");Avatar3.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar3Animation = true;})}, 800);
        setTimeout(function(){Avatar4.removeClass("display off");Avatar4.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar4Animation = true;})}, 1100);
        setTimeout(function(){Avatar5.removeClass("display off");Avatar5.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar5Animation = true;})}, 1300);
        setTimeout(function(){Avatar6.removeClass("display off");Avatar6.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar6Animation = true;})}, 1500);
        
        if(message1Animation==false){
          MessageContainer.removeClass("display off");message1Animation=true;
        } //else MessageContainer.fadeIn();
        if(message2Animation==false){
          setTimeout(function(){MessageContainer2.removeClass("display off");message2Animation=true;},2500);       
          setTimeout(function(){MessageContainer.addClass("display off"); MessageContainer2.css("top","260px");},5500);   
        } else MessageContainer2.removeClass("display off");
        setTimeout(function(){pin.removeClass("display off");},7500);
      }    
      else if((positionY>2400+scrollDiff)&&(positionY<=2500+scrollDiff)){ 
        Avatar4.removeClass('spin2').css({"top":"120px", "left":"50px", "height":"70px", "width":"70px"});
        Avatar5.removeClass('spin2').css({"top":"60px", "left":"100px", "height":"70px", "width":"70px"});
        Avatar6.removeClass('spin').css({"top":"120px", "left":"170px"});       
        Bubble6Avatare.fadeIn('slow'); 
        
        
        
        
        setTimeout(function(){
          Avatar4.addClass('spin2').css({"top":"0", "left":"450px", "height":"80px", "width":"80px"});
          Avatar5.addClass('spin2').css({"top":"120px", "left":"-200px", "height":"80px", "width":"80px"});
          Avatar6.addClass('spin').css({"top":"50px", "left":"-120px"});
        }, 500);
        Bubble6.removeClass('logo-img');
        Bubble6.addClass('main-avatar');
        if(!Bubble6.hasClass('spin')){
          Bubble6.addClass('spin');
        }
        changeTextPosition.addClass('display');
        changeTextPosition.removeClass('bottom');
        Bubble6.css("height","400px");
        Bubble6.css("width","400px");     
        Bubble6c.fadeIn();
        Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");});   
        setTimeout(function(){Avatar1.removeClass("display off");Avatar1.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar1Animation = true;})}, 500);
        setTimeout(function(){Avatar2.removeClass("display off");Avatar2.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar2Animation = true;})}, 1000);
        setTimeout(function(){Avatar3.removeClass("display off");Avatar3.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar3Animation = true;})}, 800);
        setTimeout(function(){Avatar4.removeClass("display off");Avatar4.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar4Animation = true;})}, 1100);
        setTimeout(function(){Avatar5.removeClass("display off");Avatar5.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar5Animation = true;})}, 1300);
        setTimeout(function(){Avatar6.removeClass("display off");Avatar6.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar6Animation = true;})}, 1500);
        MessageContainer2.addClass("display off");
      }
      else if((positionY>2500+scrollDiff)&&(positionY<=3100+scrollDiff)){       
        Bubble6Avatare.fadeIn('slow');
        smallBubbles.fadeOut('slow');
        setTimeout(function(){
          Avatar4.addClass('spin2').css({"top":"0", "left":"450px", "height":"80px", "width":"80px"});
          Avatar5.addClass('spin2').css({"top":"120px", "left":"-200px", "height":"80px", "width":"80px"});
          Avatar6.addClass('spin').css({"top":"50px", "left":"-120px"});
        }, 500);  
        
        
        Bubble6c.fadeIn();
        Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");});   
        setTimeout(function(){Avatar1.removeClass("display off");Avatar1.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar1Animation = true;})}, 500);
        setTimeout(function(){Avatar2.removeClass("display off");Avatar2.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar2Animation = true;})}, 1000);
        setTimeout(function(){Avatar3.removeClass("display off");Avatar3.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar3Animation = true;})}, 800);
        setTimeout(function(){Avatar4.removeClass("display off");Avatar4.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar4Animation = true;})}, 1100);
        setTimeout(function(){Avatar5.removeClass("display off");Avatar5.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar5Animation = true;})}, 1300);
        setTimeout(function(){Avatar6.removeClass("display off");Avatar6.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar6Animation = true;})}, 1500);
        MessageContainer2.addClass("display off");
      }
      else if((positionY>3100+scrollDiff)&&(positionY<=3200+scrollDiff)){
        smallBubbles.fadeOut('slow');
        
        
        
        Bubble6Avatare.fadeOut('slow');
        Bubble6.removeClass('logo-img');
        Bubble6.addClass('main-avatar');
        if(!Bubble6.hasClass('spin')){
          Bubble6.addClass('spin');
        }
        changeTextPosition.addClass('display');
        changeTextPosition.removeClass('bottom');
        Bubble6.css("height","400px");
        Bubble6.css("width","400px");     
        Bubble6c.fadeIn();
        Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");}); 
        MessageContainer2.addClass("display off");
      }
      else if((positionY>3200+scrollDiff)&&(positionY<=3400+scrollDiff)){
        smallBubbles.fadeOut('slow');
        
        
        Bubble6Avatare.fadeOut('slow');
        Bubble6.removeClass('main-avatar');
        Bubble6.addClass('logo-img');
        if(!Bubble6.hasClass('spin')){
          Bubble6.addClass('spin');
        }
        changeTextPosition.addClass('display');
        changeTextPosition.removeClass('bottom');
        Bubble6.css("height","400px");
        Bubble6.css("width","400px");     
        Bubble6c.fadeIn();
        Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");});  
        MessageContainer2.addClass("display off");
      }      
      else if(positionY>3400+scrollDiff){          
        smallBubbles.fadeIn('slow');         
        Bubble6.removeClass('main-avatar');
        Bubble6.addClass('logo-img');
        if(Bubble6.hasClass('spin')){
          setTimeout(function(){Bubble6.one("animationiteration webkitAnimationIteration oAnimationIteration mozAnimationIteration", function() {$(this).removeClass("spin");});},1000);
        }
        changeTextPosition.addClass('display');
        changeTextPosition.removeClass('bottom');
        Bubble6.css("height","400px");
        Bubble6.css("width","400px");     
        Bubble6c.fadeIn();
        Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");}); 
        MessageContainer2.addClass("display off");
        Bubble6Avatare.fadeOut('slow');
      }     
    }
    else{
      if(positionY<=500+scrollDiff){ 
        Bubble2.css("height","100px");
        Bubble2.css("width","100px");
        Bubble2.css("background-color", "#BF6F0090");
        Bubble3.css("height","125px");
        Bubble3.css("width","125px");
        Bubble3.css("background-color", "#BF6F0090");   
        Bubble4.css("height", "70px");    
        Bubble4.css("width", "70px"); 
        Bubble4.css("background-color", "#BF6F0090");   
        Bubble6.addClass("newBubble off");   
        Bubble6c.fadeOut();  
      }
      else if((positionY>500+scrollDiff)&&(positionY<=600+scrollDiff)){  
        Bubble3.css("height","80px");
        Bubble3.css("width","80px");
        Bubble3.css("background-color", "#0060DB90");  
        
        Bubble2.css("height","100px");
        Bubble2.css("width","100px");
        Bubble2.css("background-color", "#BF6F0090");    
        Bubble4.css("height", "70px");    
        Bubble4.css("width", "70px");     
        Bubble4.css("background-color", "#BF6F0090");      
        Bubble6.addClass("newBubble off");    
        Bubble6c.fadeOut();       
      }
      else if((positionY>600+scrollDiff)&&(positionY<=700+scrollDiff)){
        Bubble2.css("height","120px");
        Bubble2.css("width","120px");
        Bubble2.css("background-color", "#0060DB90"); 
        Bubble3.css("height","80px");
        Bubble3.css("width","80px");
        Bubble3.css("background-color", "#0060DB90");      
        Bubble4.css("height", "60px");    
        Bubble4.css("width", "60px"); 
        Bubble4.css("background-color", "#0060DB90"); 
        
        Bubble6.addClass("newBubble off");       
        Bubble6c.fadeOut();        
      }
      else if((positionY>700+scrollDiff)&&(positionY<=1200+scrollDiff)){
        Bubble2.css("height","120px");
        Bubble2.css("width","120px");
        Bubble2.css("background-color", "#0060DB90");     
        Bubble4.css("height", "60px");    
        Bubble4.css("width", "60px"); 
        Bubble4.css("background-color", "#0060DB90"); 
        Bubble3.css("height","80px");
        Bubble3.css("width","80px");
        Bubble3.css("background-color", "#0060DB90"); 
        typing.removeClass("display off");
        changeTextPosition.css("color","#ffffff");
        
        Bubble6c.fadeOut();             
        Bubble6.removeClass('spin main-avatar');
        Bubble6.css("height","150px");
        Bubble6.css("width","150px");
      }
      else if((positionY>1200+scrollDiff)&&(positionY<=1400+scrollDiff)){
        Bubble4.css("background-color", "#0060DB90");    
        Bubble4.css("height", "60px");    
        Bubble4.css("width", "60px");  
        Bubble2.css("height","120px");
        Bubble2.css("width","120px");
        Bubble2.css("background-color", "#0060DB90");
        Bubble6c.fadeIn();
        
          changeTextPosition.removeClass("middle");
          changeTextPosition.css("color","#ffffff");
          changeTextPosition.addClass("bottom");
          Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() { $(this).removeClass("newBubble");});   
          setTimeout(function(){Avatar1.removeClass("display off");Avatar1.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar1Animation = true;})}, 500);
          setTimeout(function(){Avatar2.removeClass("display off");Avatar2.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar2Animation = true;})}, 1000);
          setTimeout(function(){Avatar3.removeClass("display off");Avatar3.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar3Animation = true;})}, 800);
          setTimeout(function(){Avatar4.removeClass("display off");Avatar4.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar4Animation = true;})}, 1100);
          setTimeout(function(){Avatar5.removeClass("display off");Avatar5.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar5Animation = true;})}, 1300);
          setTimeout(function(){Avatar6.removeClass("display off");Avatar6.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar6Animation = true;})}, 1500);
        
        
        Bubble6.removeClass('spin main-avatar');
        Bubble6.css("height","150px");
        Bubble6.css("width","150px");
        
      }
      else if((positionY>1400+scrollDiff)&&(positionY<=1700+scrollDiff)){
        Bubble6c.fadeIn();
        if(Bubble6.hasClass("newBubble")){
          changeTextPosition.removeClass("middle");
          changeTextPosition.addClass("bottom");
          changeTextPosition.css("color","transparent");
          changeTextPosition.removeClass('display');
          
          Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() { $(this).removeClass("newBubble");});   
          setTimeout(function(){Avatar1.removeClass("display off");Avatar1.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar1Animation = true;})}, 500);
          setTimeout(function(){Avatar2.removeClass("display off");Avatar2.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar2Animation = true;})}, 1000);
          setTimeout(function(){Avatar3.removeClass("display off");Avatar3.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar3Animation = true;})}, 800);
          setTimeout(function(){Avatar4.removeClass("display off");Avatar4.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar4Animation = true;})}, 1100);
          setTimeout(function(){Avatar5.removeClass("display off");Avatar5.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar5Animation = true;})}, 1300);
          setTimeout(function(){Avatar6.removeClass("display off");Avatar6.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar6Animation = true;})}, 1500);
        }
        
        Bubble6.css("height","125px");
        Bubble6.css("width","125px");
        Bubble6.removeClass('spin main-avatar');
        Bubble6.css("height","150px");
        Bubble6.css("width","150px");
        MessageContainer.addClass("display off");
        MessageContainer2.addClass("display off").css("top","195px");
        message1Animation=message2Animation=false; 
        pin.addClass("display off");        
        Avatar4.removeClass('spin2').css({"top":"40px", "left":"30px", "height":"40px", "width":"40px"});
        Avatar5.removeClass('spin2').css({"top":"20px", "left":"70px", "height":"40px", "width":"40px"});
        Avatar6.removeClass('spin').css({"top":"50px", "left":"90px"});         
        Bubble6Avatare.fadeIn('slow');
      }
      else if((positionY>1700+scrollDiff)&&(positionY<=2200+scrollDiff)){ 
        
        Bubble6.css("height","150px");
        Bubble6.css("width","150px");
        if(message1Animation==false){
          MessageContainer.removeClass("display off");message1Animation=true;
        } //else MessageContainer.fadeIn();
        if(message2Animation==false){
          setTimeout(function(){MessageContainer2.removeClass("display off");message2Animation=true},2500);       
          setTimeout(function(){MessageContainer.addClass("display off"); MessageContainer2.css("top","130px");},5500);   
        } else MessageContainer2.removeClass("display off");
        setTimeout(function(){pin.removeClass("display off");},7500);
        Bubble6c.fadeIn("slow");
        changeTextPosition.css("color","#ffffff");
        changeTextPosition.removeClass("middle");
        changeTextPosition.addClass("bottom");        
        changeTextPosition.removeClass('display');
        Bubble6.removeClass("off").on(
          "webkitAnimationEnd oanimationend msAnimationEnd animationend",
          function() {
            $(this).removeClass("newBubble");
            //$(this).addClass("transitionBubbles");
          });   
        setTimeout(function(){Avatar1.removeClass("display off");Avatar1.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar1Animation = true;})}, 500);
        setTimeout(function(){Avatar2.removeClass("display off");Avatar2.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar2Animation = true;})}, 1000);
        setTimeout(function(){Avatar3.removeClass("display off");Avatar3.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar3Animation = true;})}, 800);
        setTimeout(function(){Avatar4.removeClass("display off");Avatar4.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar4Animation = true;})}, 1100);
        setTimeout(function(){Avatar5.removeClass("display off");Avatar5.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar5Animation = true;})}, 1300);
        setTimeout(function(){Avatar6.removeClass("display off");Avatar6.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar6Animation = true;})}, 1500);
        
        Bubble6.removeClass('spin main-avatar');
        Bubble6.css("height","150px");
        Bubble6.css("width","150px");
        
        
        Avatar4.removeClass('spin2').css({"top":"40px", "left":"30px", "height":"40px", "width":"40px"});
        Avatar5.removeClass('spin2').css({"top":"20px", "left":"70px", "height":"40px", "width":"40px"});
        Avatar6.removeClass('spin').css({"top":"50px", "left":"90px"});         
        Bubble6Avatare.fadeIn('slow');
        smallBubbles.fadeOut('slow');
        Bubble6.removeClass('logo-img');
      }
      else if((positionY>2200+scrollDiff)&&(positionY<=2300+scrollDiff)){
        Bubble6.css("height","150px");
        Bubble6.css("width","150px");
        Bubble6c.fadeIn("slow");
        MessageContainer2.addClass("display off");
        Bubble6.removeClass("off").on(
          "webkitAnimationEnd oanimationend msAnimationEnd animationend",
          function() {
            $(this).removeClass("newBubble");
            //$(this).addClass("transitionBubbles");
          });   
        setTimeout(function(){Avatar1.removeClass("display off");Avatar1.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar1Animation = true;})}, 500);
        setTimeout(function(){Avatar2.removeClass("display off");Avatar2.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar2Animation = true;})}, 1000);
        setTimeout(function(){Avatar3.removeClass("display off");Avatar3.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar3Animation = true;})}, 800);
        setTimeout(function(){Avatar4.removeClass("display off");Avatar4.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar4Animation = true;})}, 1100);
        setTimeout(function(){Avatar5.removeClass("display off");Avatar5.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar5Animation = true;})}, 1300);
        setTimeout(function(){Avatar6.removeClass("display off");Avatar6.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");avatar6Animation = true;})}, 1500);
        
        Avatar4.removeClass('spin2').css({"top":"40px", "left":"30px", "height":"40px", "width":"40px"});
        Avatar5.removeClass('spin2').css({"top":"20px", "left":"70px", "height":"40px", "width":"40px"});
        Avatar6.removeClass('spin').css({"top":"50px", "left":"90px"});
        setTimeout(function(){
          Avatar4.addClass('spin2').css({"top":"-100px", "left":"170px", "height":"80px", "width":"80px"});
          Avatar5.addClass('spin2').css({"top":"200px", "left":"30px", "height":"80px", "width":"80px"});
          Avatar6.addClass('spin').css({"top":"-50px", "left":"0px"});
        }, 500);
        Bubble6.removeClass('logo-img');
        Bubble6.addClass('main-avatar');
        if(!Bubble6.hasClass('spin')){
          Bubble6.addClass('spin');
        }       
        changeTextPosition.css("color","transparent");
        changeTextPosition.removeClass('bottom');
        Bubble6.css("height","200px");
        Bubble6.css("width","200px");
        
        Bubble6Avatare.fadeIn('slow');
        smallBubbles.fadeOut('slow');
        Bubble6.removeClass('logo-img');
      }
      else if((positionY>2300+scrollDiff)&&(positionY<=2900+scrollDiff)){ 
        Bubble6.css("height","150px");
        Bubble6.css("width","150px");
        
        Bubble6Avatare.fadeIn('slow');
        setTimeout(function(){
          Avatar4.addClass('spin2').css({"top":"-100px", "left":"170px", "height":"80px", "width":"80px"});
          Avatar5.addClass('spin2').css({"top":"200px", "left":"30px", "height":"80px", "width":"80px"});
          Avatar6.addClass('spin').css({"top":"-50px", "left":"0px"});
        }, 500);
        
        Bubble6.addClass('main-avatar');
        if(!Bubble6.hasClass('spin')){
          Bubble6.addClass('spin');
        }
        changeTextPosition.css("color","transparent");
        changeTextPosition.removeClass('bottom');
        Bubble6.css("height","200px");
        Bubble6.css("width","200px");
        
        smallBubbles.fadeOut('slow');
        Bubble6.removeClass('logo-img');
      }
      else if(positionY>2900+scrollDiff){
        smallBubbles.fadeIn('slow');
        Bubble6.removeClass('main-avatar');
        Bubble6.addClass('logo-img');
        if(Bubble6.hasClass('spin')){
          setTimeout(function(){Bubble6.one("animationiteration webkitAnimationIteration oAnimationIteration mozAnimationIteration", function() {$(this).removeClass("spin");});},1000);
        }
        changeTextPosition.css("color","transparent");
        changeTextPosition.removeClass('bottom');
        Bubble6.css("height","200px");
        Bubble6.css("width","200px");
        Bubble6c.fadeIn();
        Bubble6.removeClass("off").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function() {$(this).removeClass("newBubble");}); 
        MessageContainer2.addClass("display off");
        Bubble6Avatare.fadeOut('slow');
      }
      
    }    
  }); 
  
});

function setValues(){
  diffHeight=0;
  diffWidth=0;
  positionY=0;
  schrittzahlx =30;
  schrittzahly =15;
  windowHeight = $(window).height();
  windowWidth = $(window).width();
  fixedHeight=720;
  fixedWidth = 1200;
  contentWidth = $(".content-center").width();
  diffHeight = (windowHeight/fixedHeight);
  diffWidth = (contentWidth/fixedWidth);
  scrollDiff=fixedHeight*diffHeight-fixedHeight;
  doc = document.body;
  if(windowWidth>890){
    //Bubblepositions  
    // Hula, hoop, hooray!
    $( ".Bubble1c" ).children('.x').val(950);
    $( ".Bubble1c").children('.y').val(350);
    // NY cheescake
    $( ".Bubble2c" ).children('.x').val(700);
    $( ".Bubble2c").children('.y').val(300);
    // Margaritas
    $( ".Bubble3c" ).children('.x').val(910);
    $( ".Bubble3c" ).children('.y').val(150);
    // Yogaclass
    $( ".Bubble4c" ).children('.x').val(800);
    $( ".Bubble4c" ).children('.y').val(100);
    $( ".Bubble5c" ).children('.x').val(890);
    $( ".Bubble5c" ).children('.y').val(520);
    // Do all & Party
    $( ".Bubble6c" ).children('.x').val(300);
    $( ".Bubble6c" ).children('.y').val(450);
    // Yes of course
    $( ".Bubble7c" ).children('.x').val(0);
    $( ".Bubble7c" ).children('.y').val(360);
    // let's dance
    $( ".Bubble8c" ).children('.x').val(30);
    $( ".Bubble8c" ).children('.y').val(500);
    // 3.30 pm
    $( ".Bubble9c" ).children('.x').val(750);
    $( ".Bubble9c" ).children('.y').val(430);
    // light blue
    $( ".Bubble10c" ).children('.x').val(800);
    $( ".Bubble10c" ).children('.y').val(450);
    $( ".Bubble11c" ).children('.x').val(700);
    $( ".Bubble11c" ).children('.y').val(600);
    $( ".Bubble12c" ).children('.x').val(-80);
    $( ".Bubble12c" ).children('.y').val(500);
    $( ".Bubble13c" ).children('.x').val(950);
    $( ".Bubble13c" ).children('.y').val(600);
    $( ".Bubble14c" ).children('.x').val(10);
    $( ".Bubble14c" ).children('.y').val(600);
    $( ".Bubble15c" ).children('.x').val(220);
    $( ".Bubble15c" ).children('.y').val(500);
    $( ".Bubble16c" ).children('.x').val(730);
    $( ".Bubble16c" ).children('.y').val(550);
    $( ".Bubble17c" ).children('.x').val(1000);
    $( ".Bubble17c" ).children('.y').val(550);
    $( ".Bubble18c" ).children('.x').val(1150);
    $( ".Bubble18c" ).children('.y').val(150);
  }
  else{
    //Bubblepositions  
    // Hula, hoop, hooray!
    $( ".Bubble1c" ).children('.x').val(900);
    $( ".Bubble1c").children('.y').val(200);
    //NY Cheescake
    $( ".Bubble2c" ).children('.x').val(100);
    $( ".Bubble2c").children('.y').val(180);
    // Margaritas
    $( ".Bubble3c" ).children('.x').val(550);
    $( ".Bubble3c" ).children('.y').val(150);
    // Yogaclass
    $( ".Bubble4c" ).children('.x').val(350);
    $( ".Bubble4c" ).children('.y').val(250);
    // Do all & Party
    $( ".Bubble6c" ).children('.x').val(500);
    $( ".Bubble6c" ).children('.y').val(500);
    // Yes of course
    $( ".Bubble7c" ).children('.x').val(0);
    $( ".Bubble7c" ).children('.y').val(350);
    // let's dance
    $( ".Bubble8c" ).children('.x').val(50);
    $( ".Bubble8c" ).children('.y').val(600);
    // 3.30 pm
    $( ".Bubble9c" ).children('.x').val(750);
    $( ".Bubble9c" ).children('.y').val(300);
    // Ibiza
    $( ".Bubble10c" ).children('.x').val(800);
    $( ".Bubble10c" ).children('.y').val(350);
    // light blue
    $( ".Bubble11c" ).children('.x').val(700);
    $( ".Bubble11c" ).children('.y').val(600);
    $( ".Bubble12c" ).children('.x').val(600);
    $( ".Bubble12c" ).children('.y').val(350);
    $( ".Bubble13c" ).children('.x').val(950);
    $( ".Bubble13c" ).children('.y').val(600);
    $( ".Bubble14c" ).children('.x').val(10);
    $( ".Bubble14c" ).children('.y').val(600);
    $( ".Bubble15c" ).children('.x').val(650);
    $( ".Bubble15c" ).children('.y').val(340);
    $( ".Bubble16c" ).children('.x').val(100);
    $( ".Bubble16c" ).children('.y').val(300);
    $( ".Bubble17c" ).children('.x').val(100);
    $( ".Bubble17c" ).children('.y').val(550);
  }
};
