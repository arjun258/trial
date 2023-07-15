AFRAME.registerComponent('game',{
    schema:{
        gameState:{
            type:"string",
            default:"play"
        },
        
    },
    init:function(){
        var duration = 300
        var timere1 = document.querySelector('#timer')
        this.startTimer(duration,timere1)
        
    },
    startTimer:function(duration,timere1){
        var minute,second 
        setInterval(() => {
            if (duration>=0){
                this.data.gameState = "play"
                minute = parseInt(duration/60)
                second = parseInt(duration%60)
                if(minute<10){
                    minute = "0" + minute
                }
                if(second<10){
                    second = "0" + second
                }
                timere1.setAttribute("text",{
                    value : minute + ":" + second
                })
                duration = duration-1
            }
            else{
                this.data.gameState = "over"
                var cameraRig = document.querySelector("#camera-rig")
                cameraRig.setAttribute("velocity",{
                    x:0,
                    y:0,
                    z:0
                })
                var over = document.querySelector("#over")
                over.setAttribute("visible",true)
            }
            
        },1000);
    }
})