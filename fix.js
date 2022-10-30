if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
    var nbffbug=0;
    //replace 100% by your iframe width
  var ezbasewidth = "100%";
    window.addEventListener('scroll', function ( event ) {
      //replace testframe by your iframe id
      var ezframe = document.getElementById("testframe");
        if (nbffbug==0) {
          ezframe.style.width = "calc("+ezbasewidth+" - 0.0001px)";
        nbffbug=1;
      } else {
        ezframe.style.width = "";
        nbffbug=0;
      }
    
    }, false);
  }