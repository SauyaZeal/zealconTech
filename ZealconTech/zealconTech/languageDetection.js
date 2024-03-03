window.onload = function() {   

  var userLang = navigator.language || navigator.userLanguage; 
  userLang = userLang.substring(0,2);
  userLang = userLang.toLowerCase();
  
  
  var host = window.location.hostname;
  
  var pathname = window.location.pathname;
  pathname = pathname.split("/");
  
  //console.log(userLang);
  //console.log(host);
  //console.log(pathname);
  var deUrl = $(".sprachen #de").attr("href");
  console.log(deUrl);
  if(!getCookie("vobeLanguageCookie")){
    console.log("hat geklappt");
    switch(userLang){
      case "de":
        if(pathname[1] != "de" && deUrl != null) {
          console.log("PAGE DE");
          console.log("https://" + host + "/" + deUrl);
          window.location.replace("https://" + host + "/" + deUrl);
        }
        break;      
      default:      
        break;
          }
    setCookie("vobeLanguageCookie", "7")
  }
  else console.log("hat nicht geklappt");


};
  
  
function setCookie(key, value){
  document.cookie = key + "=" + value;
}

function getCookie(key){
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}
