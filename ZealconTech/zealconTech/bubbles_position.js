
  myscrollpos = 0;  

    function movebubbles(){
      myscrollposold = myscrollpos;
      myscrollpos = $( window ).scrollTop();
      myscrollspeed = myscrollposold - myscrollpos;
            
              
      $( "html").css("background-position-y", myscrollpos*0.5+"px")  ;  
      if(windowWidth>890){
        
        //Bubble1 Hula, hoop, hooray!, 5 & 18
          $( ".Bubble1c, .Bubble5c, .Bubble18c" ).each(function() {
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());
            myx = myx*diffWidth;
            myy = myy;
            cssx=$( this).css("left");
            cssy=$( this).css("top");
            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));
  
            //startpositionen über input
            zielleft = myx;
            zieltop = myy-myscrollpos+0;          
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;

            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");
          });
          
        //Bubble2 NY Cheescake
          $( ".Bubble2c" ).each(function() {
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());       
            myx = myx*diffWidth;
            myy = myy;           
            cssx=$( this).css("left");
            cssy=$( this).css("top");
            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));            

            //ganz oben steht
            if (positionY <= 360+scrollDiff)  {
              zielleft = myx;
              zieltop = myy-myscrollpos+0;    
            }           
            //first steht
            else if ((positionY > 360+scrollDiff) && (positionY<=1000+scrollDiff)) {
              zielleft = myx+220*diffWidth;
              zieltop = (150+myy)-myscrollpos+360+scrollDiff; 
            }            
            //second steht
            else {
              zielleft = myx-500*diffWidth;
              zieltop = (60+myy)-myscrollpos+1000+scrollDiff;
            }
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");
          });
          
        //Bubble3 Margaritas
          $( ".Bubble3c" ).each(function() {
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());        
            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");

            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));

            //ganz oben steht
            if (positionY <= 500+scrollDiff)  {
              zielleft = myx;
              zieltop = myy-myscrollpos+0;              
              $('.avatar').addClass('newBubble off display');
              $('.changeTextPosition').addClass("middle");
              $('.changeTextPosition').removeClass("bottom");
            }
          
            //first steht
            else if ((positionY > 500+scrollDiff) && (positionY<=1100+scrollDiff)) {
              zielleft = myx-110*diffWidth;
              zieltop = (330+myy)-myscrollpos+500+scrollDiff;
              $('.avatar').addClass('newBubble off display');
              $('.changeTextPosition').addClass("middle");
              $('.changeTextPosition').removeClass("bottom"); 
            }
            
            //second steht
            else {
              zielleft = myx-750*diffWidth;
              zieltop = (330+myy)-myscrollpos+1100+scrollDiff;
            }
            
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;

            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");

          });
          
        //Bubble4 Yoga class
          $( ".Bubble4c" ).each(function() {
            myx = parseFloat($( this ).children('.x').val())
            myy = parseFloat($( this ).children('.y').val())                  
            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");

            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));

            //ganz oben steht
            if (positionY <= 250+scrollDiff)  {
              zielleft = myx;
              zieltop = myy-myscrollpos+0;
            }
            
            //first steht
            else if ((positionY > 250+scrollDiff) && (positionY<=900+scrollDiff)) {
              zielleft = myx-60*diffWidth;
              zieltop = (myy+530)-myscrollpos+250+scrollDiff;
            }
          
            //second steht
            else {
              zielleft = myx-560*diffWidth;
              zieltop = (780+myy)-myscrollpos+900+scrollDiff;
            }
          
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");

          });
          
        //Bubble6 Do all & Party
          $( ".Bubble6c" ).each(function() {
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());                 
            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");

            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));
          
            
            //start
            if (positionY<1100+scrollDiff) {
              zielleft = myx;
              zieltop = myy;  
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");            
            }
            //second steht
            else if ((positionY >= 1100+scrollDiff) && (positionY<=1700+scrollDiff)) {
              zielleft = myx;
              zieltop = (myy)-myscrollpos+1100+scrollDiff;  
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");
            }
          
            //gelb steht
            else if ((positionY > 1700+scrollDiff)&& (positionY<=2400+scrollDiff)) {
              zielleft = myx+450*diffWidth;
              zieltop = (60+myy)-myscrollpos+1700+scrollDiff;
            }
            //grün steht
            else if ((positionY > 2400+scrollDiff)&& (positionY<=3200+scrollDiff)) {
              zielleft = myx+150*diffWidth;
              zieltop = (50+myy)-myscrollpos+2400+scrollDiff;   
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");  
            }
            //hellblau steht
            else if ((positionY > 3200+scrollDiff)) {
              zielleft = myx+110*diffWidth;
              zieltop = (120+myy)-myscrollpos+3200+scrollDiff;                
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display"); 
            }

            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");
          });  
        
        
        //smallBubbles
          $( ".smallBubbles" ).each(function() {
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());                    
            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");

            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));
            
            //hellblau steht
            if ((positionY > 3400+scrollDiff)) {
              zielleft = myx+150*diffWidth;
              zieltop = (myy)-myscrollpos+3400+scrollDiff;
            }

            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");
          }); 
      }
      else{
        
        //Bubble1 Hula, hoop, hooray!, 5 & 18
          $( ".Bubble1c, .Bubble5c, .Bubble18c" ).each(function() {
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());
            myx = myx*diffWidth;
            myy = myy;

            cssx=$( this).css("left");
            cssy=$( this).css("top");

            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));

            //startpositionen über input
            zielleft = myx;
            zieltop = myy-myscrollpos+0;      

            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;

            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");
          });
          
        //Bubble2 NY Cheescake
          $( ".Bubble2c" ).each(function() {
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());       

            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");

            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));

            //ganz oben steht
            if (positionY <= 600+scrollDiff)  {
              zielleft = myx;
              zieltop = myy-myscrollpos+0;    
            }
            
            //first steht
            else if ((positionY > 600+scrollDiff) && (positionY<=1100+scrollDiff)) {
              zielleft = myx+120*diffWidth;
              zieltop = (200+myy)-myscrollpos+600+scrollDiff;  
            }
            
            //second steht
            else {
              zielleft = myx+200*diffWidth;
              zieltop = (220+myy)-myscrollpos+1100+scrollDiff;
            }

            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");
          });
          
        //Bubble3 Margaritas
          $( ".Bubble3c" ).each(function() {

            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());        

            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");

            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));

            //ganz oben steht
            if (positionY <= 500+scrollDiff)  {
              zielleft = myx;
              zieltop = myy-myscrollpos+0;               
              $('.avatar').addClass('newBubble off display'); 
              $('.changeTextPosition').addClass("middle");
              $('.changeTextPosition').removeClass("bottom");            
            }
          
            //first steht
            else if ((positionY > 500+scrollDiff) && (positionY<=1200+scrollDiff)) {
              zielleft = myx+100;
              zieltop = (400+myy)-myscrollpos+500+scrollDiff;              
              $('.avatar').addClass('newBubble off display');
              $('.changeTextPosition').addClass("middle");
              $('.changeTextPosition').removeClass("bottom");     
            }
            
            //second steht
            else {
              zielleft = myx-400*diffWidth;
              zieltop = (320+myy)-myscrollpos+1200+scrollDiff;
            }
            
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;

            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");

          });
          
        //Bubble4 Yoga class
          $( ".Bubble4c" ).each(function() {
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());        
            
            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");

            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));

            //ganz oben steht
            if (positionY <= 600+scrollDiff)  {
              zielleft = myx;
              zieltop = myy-myscrollpos+0;
            }
            
            //first steht
            else if ((positionY > 600+scrollDiff) && (positionY<=1300+scrollDiff)) {
              zielleft = myx*diffWidth;
              zieltop = (myy+250)-myscrollpos+600+scrollDiff;
            }
          
            //second steht
            else {
              zielleft = myx-60*diffWidth;
              zieltop = (myy+200)-myscrollpos+1300+scrollDiff;
            }
          
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");

          });
        
        if((windowWidth<=890)&&(windowWidth>420))
        {
          //Bubble6 Do all & Party
          $( ".Bubble6c" ).each(function() {
            
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());        
            
            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");
            
            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));
            
            
            //start
            if (positionY<1100+scrollDiff) {
              zielleft = myx;
              zieltop = myy;   
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");         
            }
            //second steht
            else if ((positionY >= 1100+scrollDiff) && (positionY<=1700+scrollDiff)) {
              zielleft = myx;
              zieltop = (myy)-myscrollpos+1100+scrollDiff;  
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");
            }
            
            //third steht
            else if ((positionY > 1700+scrollDiff)&& (positionY<=2200+scrollDiff)) {
              zielleft = myx-30*diffWidth;
              zieltop = (myy-80)-myscrollpos+1700+scrollDiff;
            }
            //forth steht
            else if ((positionY > 2200+scrollDiff)&& (positionY<=3000+scrollDiff)) {
              zielleft = myx-75*diffWidth;
              zieltop = (myy-50)-myscrollpos+2200+scrollDiff; 
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");    
            }
            //fifth steht
            else {
              zielleft = myx-75*diffWidth;
              zieltop = (myy-100)-myscrollpos+3000+scrollDiff;  
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");
            }
            
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");
          });  
          
          //smallBubbles
          $( ".smallBubbles" ).each(function() {
            
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());        
            
            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");
            
            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));
            
            //fifth steht
            if ((positionY > 3000+scrollDiff)) {
              zielleft = myx+150*diffWidth;
              zieltop = (myy)-myscrollpos+3000+scrollDiff;
            }
            
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px")  ;
            $( this).css("top", steptop+"px")  ;
          }); 
        }
        else{
        //Bubble6 Do all & Party
          $( ".Bubble6c" ).each(function() {
            
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());        
            
            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");
            
            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));
            
            
            //start
            if (positionY<1100+scrollDiff) {
              zielleft = myx;
              zieltop = myy;   
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");         
            }
            //second steht
            else if ((positionY >= 1100+scrollDiff) && (positionY<=1700+scrollDiff)) {
              zielleft = myx;
              zieltop = (myy)-myscrollpos+1100+scrollDiff;  
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");
            }
            
            //third steht
            else if ((positionY > 1700+scrollDiff)&& (positionY<=2200+scrollDiff)) {
              zielleft = myx-100*diffWidth;
              zieltop = (myy-80)-myscrollpos+1700+scrollDiff;
            }
            //forth steht
            else if ((positionY > 2200+scrollDiff)&& (positionY<=3000+scrollDiff)) {
              zielleft = myx-280*diffWidth;
              zieltop = (myy-100)-myscrollpos+2200+scrollDiff; 
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");    
            }
            //fifth steht
            else {
              zielleft = myx-280*diffWidth;
              zieltop = (myy-100)-myscrollpos+3000+scrollDiff;  
              $('.message_container').addClass("display");   
              $('.message_container2').addClass("display");
            }
            
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px");
            $( this).css("top", steptop+"px");
          });  
          
          //smallBubbles
          $( ".smallBubbles" ).each(function() {
            
            myx = parseFloat($( this ).children('.x').val());
            myy = parseFloat($( this ).children('.y').val());        
            
            myx = myx*diffWidth;
            myy = myy;
            
            cssx=$( this).css("left");
            cssy=$( this).css("top");
            
            nowx = Number(cssx.substring(0, cssx.length-2)); 
            nowy = Number(cssy.substring(0, cssy.length-2));
            
            //fifth steht
            if ((positionY > 3000+scrollDiff)) {
              zielleft = myx+150*diffWidth;
              zieltop = (myy-10)-myscrollpos+3000+scrollDiff;
            }
            
            steptop =  nowy + (zieltop - nowy)/schrittzahly;
            stepleft=  nowx + (zielleft - nowx)/schrittzahlx;
            
            $( this).css("left", stepleft+"px")  ;
            $( this).css("top", steptop+"px")  ;
          }); 
        }     
      }
    };    
      
    setTimeout( function(){ 
      $('.Bubbles-Container').fadeIn(2000);
      setInterval("movebubbles()", 30);
    }, 2000 );   