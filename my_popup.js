var elems = document.querySelectorAll(".thumb");
for (var i = 0; i < elems.length; i++){
  elems[i].onclick = function(event){
  //  console.log(this.src);
    var way = event.target.src;
    var newway = way.replace("_low","");
    var newway1 = newway.replace("thumbs/","");

    var from = newway1.search('/img');
    var to = newway1.length;
    var newway2 = newway1.substring(from,to);
    console.log(newway2);

    document.body.insertAdjacentHTML("afterEnd", "<div class='popup'>"+
                          "<div class='popup_bg'></div>"+
                          "<img src='"+newway1+"' class='popup_img' />"+
                          "</div>");
    fadeIn(".popup");

     document.querySelector(".popup_bg").addEventListener("click", function(){
       fadeOut(".popup");
       var popupElem = document.querySelector(".popup");
       setTimeout( function() { popupElem.parentNode.removeChild(popupElem);}, 1000);
      /* var popupElem = document.querySelectorAll(".popup");
       for (var j = 0; j < popupElem.length; j++){
       setTimeout(popupElem[j].parentNode.removeChild(popupElem[j]), 1000); }*/
     });
}
}

function fadeIn(el) {
    var opacity = 0.01;
    document.querySelector(el).style.display = "block";
    var timer = setInterval(function() {
      if(opacity >= 1) {
        clearInterval(timer);
        }
      document.querySelector(el).style.opacity = opacity;
       opacity += opacity * 0.1;
      }, 10);
     }

function fadeOut(el) {
     var opacity = 1;
    var timer = setInterval(function() {
      	if(opacity <= 0.1) {
     			clearInterval(timer);
     			document.querySelector(el).style.display = "none";
     		}
     		document.querySelector(el).style.opacity = opacity;
     		opacity -= opacity * 0.1;
     	}, 10);

     }
