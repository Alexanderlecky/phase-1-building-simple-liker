// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("model");
  errorModal.classList.add("hidden");

  const hearts = document.querySelectorAll(".like-glyph");
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      if (heart.innerText === "♡") {
        mimicServerCall()
        .then(() => {
          heart.innerText = "♥";
          heart.classList.add("activated-heart");
        })
        .catch(error => {
          errorModal.classList.remove("hidden");
          document.getElementById("model-message").innerText = error;
          setTimeout(() => {
            errorModel.classList.add("hidden");
          }, 3000);
        });
      }else {
        heart.innerText = "♡"
        heart.classList.remove("activated-heart");
      }
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
