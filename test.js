const buttonsContainer = document.getElementById("buttonsContainer");

// for (let i = 0; i < 5; i++) {
//     const button = document.createElement("button");
//     button.innerText = i;
//     button.addEventListener("click", function() {
//       console.log(i)
//     })
//     buttonsContainer.appendChild(button);
//   }
  for (var i = 0; i < 5; i++) {
    var button = document.createElement("button");
    button.innerText = i;
    (function(index){
      button.addEventListener("click", function() {
        console.log(index)
      })
    })(i)
    buttonsContainer.appendChild(button);
  
  }
  console.log(i);