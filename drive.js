AFRAME.registerComponent("drive",{
    init:function(){
        var gameStateValue = this.el.getAttribute("game")
        if(gameStateValue = "play"){
            this.driveCar()
        }
    },
    driveCar:function(){
        var wheelRotation = 0;
        var multiply = 10;
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

            var cameraDirection = new THREE.Vector3();
            cameraRig.object3D.getWorldDirection(cameraDirection);



                if(e.code == "Space"){
                    console.log("break")
                    multiply = 0;
                    cameraRig.setAttribute("movement-controls",{
                        
                        'speed':0
                    })

                }
                if(e.code == "ArrowRight"){
                    console.log("hi")
                    cameraRotation.y = cameraRotation.y-0.5
                    cameraRig.setAttribute("rotation",{
                        x:0,
                        y:cameraRotation.y,
                        z:0
                    })
                    cameraRig.setAttribute('movement-controls',{
                        "speed":cameracontrol.speed+0.005
                    })
                }
                if(e.code == "ArrowLeft"){
                    cameraRotation.y = cameraRotation.y+0.5
                    cameraRig.setAttribute("rotation",{
                        x:0,
                        y:cameraRotation.y,
                        z:0
                    })
                    cameraRig.setAttribute('movement-controls',{
                        "speed":cameracontrol.speed+0.005
                    })
                }


                if(e.code == "ArrowUp"){
                    multiply+=0.5

                    if (multiply <= 100 && cameraPosition.z > -500) {                  
                        cameraRig.setAttribute("movement-controls", {"speed": cameracontrol.speed + 0.005})
                        console.log(multiply)
                        console.log(cameracontrol.speed)
                        
                        cameraRig.setAttribute("position",{
                            x:cameraPosition.x,
                            y:cameraPosition.y,
                            z:cameraPosition.z-0.5
                        })
                        var accelerateCar = document.querySelector("#control-acce")
                        accelerateCar.setAttribute("material", "color", "white")
                        var carSpeed = document.querySelector("#speed")
                        carSpeed.setAttribute("text", { value: multiply });

                    }
           
                }

            
        })
    }

})