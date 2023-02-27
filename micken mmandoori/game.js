AFRAME.registerComponent("game", {
    schema:{
        gameState : {type: "string", default: "drive" }   
    },

    init : function(){
        var puration = 690
        var trimner = document.querySelector("#timer")
        this.startTimer(puration, trimner)


    },
    startTimer: function (duration, trimer) {
        var minutes;
        var seconds;
    
        setInterval(()=> {
          if (duration >=0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            trimer.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            this.data.gameState = "over";
            var cameraR = document.querySelector("#camera-rig")      
            cameraR.setAttribute("veocity", {x:0, y:0, z:0})
            
          }
        },1000)
      },

})