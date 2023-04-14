const video = document.getElementById("background");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const buttons = document.querySelectorAll("button");
// CONTAINERS
const containers = document.querySelectorAll(".container_container .container");

// PLAY-PAUSE BUTTONS
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playButton.style.display = "none";
      pauseButton.style.display = "block";
    } else {
      video.pause();
      playButton.style.display = "block";
      pauseButton.style.display = "none";
    }
  });
});

// CONTAINER_CONTAINER
containers.forEach((container) => {
  container.addEventListener("click", () => {
   

    containers.forEach((container) => {
      container.classList.remove("active");
    });

    container.classList.add("active");
  })
});
