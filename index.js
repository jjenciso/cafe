const video = document.getElementById("background");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const pausePlayButtons = document.querySelectorAll(".pausePlay");
// CONTAINERS
const containers = document.querySelectorAll(".container_container button");

containers.forEach((container) => {
  container.addEventListener("click", () => {
    const className = container.className;
    const rightContainers = document.querySelectorAll('.right_container div');

    // rightContainers.forEach(rightContainer => {
    //   if (rightContainer.classList.contains(className)) {
    //     console.log("clicked")
    //     rightContainer.style.display = 'block';
    //   } else {
    //     rightContainer.style.display = 'none';
    //   }

    // });

    containers.forEach((container) => {
      container.classList.remove("active");
    });

    container.classList.add("active");
  })
});

// PLAY-PAUSE BUTTONS
pausePlayButtons.forEach((pausePlayButton) => {
  pausePlayButton.addEventListener("click", () => {
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

