AFRAME.registerComponent("drive",{
    init:function(){
        var gameStateValue = this.el.getAttribute("game")
        if(gameStateValue = "play"){
            this.driveCar()
        }
    },
    driveCar:function(){
        var wheelRotation = 0;
        window.addEventListener('keydown',function(e){
            var wheel = document.querySelector('#control-wheel')
            if(e.code == "ArrowRight" && wheelRotation >-40){
                wheelRotation = wheelRotation-2
                wheel.setAttribute("rotation",{
                    x:0,
                    y:0,
                    z:wheelRotation
                })
            }
            if(e.code == "ArrowLeft" && wheelRotation <40){
                wheelRotation = wheelRotation+3
                wheel.setAttribute("rotation",{
                    x:0,
                    y:0,
                    z:wheelRotation
                })
            }
            var cameraRig = document.querySelector("#camera-rig")
            var cameraRotation = cameraRig.getAttribute("rotation")
            var cameraPosition = cameraRig.getAttribute("position")
            var cameracontrol = cameraRig.getAttribute("movement-controls")
            cameraRig.setAttribute("movement-controls",{
                'speed' : cameracontrol.speed+0.005
            })
        })
    }

})