AFRAME.registerComponent("drive", {
  init: function () {
    this.driveCar();
  },

  driveCar: function () {
    var multiply = 10;
    var wheelRotation = 0;
    window.addEventListener(
      "keydown",
      function (f) {
        var cameraR = document.querySelector("#camera-rig");
        var cameraRotation = cameraR.getAttribute("rotation");
        var cameraPostion = cameraR.getAttribute("position");
        var cameraMovementControls = cameraR.getAttribute("movement-controls");
        var wheel = document.querySelector("#controlWheel");

        cameraR.setAttribute("movement-controls", {
          speed: cameraMovementControls.speed + 0.005,
        });

        if (f.code == "ArrowUp") {
          multiply = multiply + 0.5;
          if (multiply <= 100 && cameraPostion.z > -500) {
            cameraR.setAttribute("movement-controls", {
              speed: cameraMovementControls.speed + 0.005,
            });
            accelerateCar = document.querySelector("#controlAccelerator");
            accelerateCar.setAttribute("material", "color", "green");
            text = document.querySelector("#speed");
            accelerateCar.setAttribute("text", { value: multiply });
          }
        }
        if (f.code == "ArrowRight" && wheelRotation > -40) {
          wheelRotation = wheelRotation - 5;
          wheel.setAttribute("rotation", { x:0, y: 0, z: wheelRotation });
        }

        if (f.code == "ArrowLeft" && wheelRotation < 40) {
          wheelRotation = wheelRotation + 5;
          wheel.setAttribute("rotation", { x:0, y:0, z: wheelRotation });
        }

        if (f.code == "ArrowRight") {
          cameraRotation.y = cameraRotation.y - 5;
          cameraR.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 });
          cameraR.setAttribute("movement-controls", {
            speed: cameraMovementControls.speed + 0.005,
          });
        }
        if (f.code == "ArrowLeft") {
          cameraRotation.y = cameraRotation.y + 5;
          cameraR.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 });
          cameraR.setAttribute("movement-controls", {
            speed: cameraMovementControls.speed + 0.005,
          });
        }
      },
      window.addEventListener("keyup", function (f) {
        var cameraR = document.querySelector("#camera-rig");
        var cameraDirection = new THREE.Vector3();
        cameraR.object3D.getWorldDirection(cameraDirection);
        var cameraControl = cameraR.getAttribute("movement-controls");

        if (f.code == "space") {
          var startCar = document.querySelector("controlBrake");
          startCar.setAttribute("material", "color", "red");
        }
        if (f.code == "ArrowUp") {
          if (multiply > 10) {
            multiply = multiply - 0.25;
            cameraR.setAttribute("movement-controls", {
              speed: cameraControl.speed - 0.005,
            });
            accelerateCar.setAttribute("material", "color", "grey");
          }
        }
      })
    );
  },
});
