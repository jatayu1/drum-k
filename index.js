var butt = document.querySelectorAll("button");
for (var i = 0; i < butt.length; i++) {
  butt[i].addEventListener("click", test);
  function test() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    addAnimation(buttonInnerHtml);
  }
  // if (i === 0) {
  //   butt[i].addEventListener("click", test);
  //   function test() {
  //     var tom1 = new Audio("./sounds/tom-1.mp3");
  //     tom1.play();
  //   }
  // }
  // if (i === 1) {
  //   butt[i].addEventListener("click", test);
  //   function test() {
  //     var tom1 = new Audio("./sounds/tom-2.mp3");
  //     tom1.play();
  //   }
  // }
  // if (i === 2) {
  //   butt[i].addEventListener("click", test);
  //   function test() {
  //     var tom1 = new Audio("./sounds/tom-3.mp3");
  //     tom1.play();
  //   }
  // }
  // if (i === 3) {
  //   butt[i].addEventListener("click", test);
  //   function test() {
  //     var tom1 = new Audio("./sounds/tom-4.mp3");
  //     tom1.play();
  //   }
  // }
  // if (i === 4) {
  //   butt[i].addEventListener("click", test);
  //   function test() {
  //     var tom1 = new Audio("./sounds/crash.mp3");
  //     tom1.play();
  //   }
  // }
  // if (i === 5) {
  //   butt[i].addEventListener("click", test);
  //   function test() {
  //     var tom1 = new Audio("./sounds/kick-bass.mp3");
  //     tom1.play();
  //   }
  // }
  // if (i === 6) {
  //   butt[i].addEventListener("click", test);
  //   function test() {
  //     var tom1 = new Audio("./sounds/snare.mp3");
  //     tom1.play();
  //   }
  // }
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  addAnimation(event.key);
  // if (event.key == "w") {
  //   var tom1 = new Audio("./sounds/tom-1.mp3");
  //   tom1.play();
  // } else if (event.key == "a") {
  //   var tom2 = new Audio("./sounds/tom-2.mp3");
  //   tom2.play();
  // } else if (event.key == "s") {
  //   var tom3 = new Audio("./sounds/tom-3.mp3");
  //   tom3.play();
  // } else if (event.key == "d") {
  //   var tom4 = new Audio("./sounds/tom-4.mp3");
  //   tom4.play();
  // } else if (event.key == "j") {
  //   var crash = new Audio("./sounds/crash.mp3");
  //   crash.play();
  // } else if (event.key == "k") {
  //   var kick = new Audio("./sounds/kick-bass.mp3");
  //   kick.play();
  // } else if (event.key == "l") {
  //   var snare = new Audio("./sounds/snare.mp3");
  //   snare.play();
  // }
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("./sounds/tom-2.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("./sounds/tom-3.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-4.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("./sounds/crash.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("./sounds/kick-bass.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("./sounds/snare.mp3");
      tom1.play();
      break;

    default:
      alert(
        "push the buttons shown in the pictures either in screen or on keyboard."
      );
      break;
  }
}

function addAnimation(currentKey) {
  var selectedButton = document.querySelector("." + currentKey);
  selectedButton.classList.add("pressed");
  setTimeout(function () {
    selectedButton.classList.remove("pressed");
  }, 100);
}
