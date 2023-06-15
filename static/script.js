function changeProfile(profileNumber) {
  // Get the profile image element
  var profileImg = document.getElementById("profile-img");

  // Update the source of the profile image based on the selected profile number
  profileImg.src = "/static/media/profile-image" + profileNumber + ".jpg";

  // Get all the dots
  var dots = document.getElementsByClassName("dot");

  // Remove the "active" class from all dots
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Add the "active" class to the selected dot
  dots[profileNumber - 1].classList.add("active");
  const elements = document.querySelectorAll(
    ".left-side, .skills-container, .contact-container, .blog h3, .right-side,.right-grid,.project-overlay,.project-title,.row-hide,.column-hide"
  );

  elements.forEach((element) => {
    if (profileNumber === 3) {
      element.classList.add("dark-mode");
    } else {
      element.classList.remove("dark-mode");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const addHoverEffect = (project, skills, nonskills) => {
    project.addEventListener("mouseover", () => {
      const allskills_arr = nonskill(skills, nonskills);

      const allskills = document.querySelectorAll(allskills_arr);
      const skills_new = document.querySelectorAll(skills);

      skills_new.forEach((text) => {
        text.classList.add("bold-text");
      });

      allskills.forEach((text) => {
        text.classList.add("hidden-text");
      });
    });

    project.addEventListener("mouseout", () => {
      const allskills_arr = nonskill(skills, nonskills);
      const allskills = document.querySelectorAll(allskills_arr);
      const skills_new = document.querySelectorAll(skills);
      skills_new.forEach((text) => {
        text.classList.remove("bold-text");
      });

      allskills.forEach((text) => {
        text.classList.remove("hidden-text");
      });
    });
  };

  const proj1 = document.querySelector("#proj-1");
  const proj2 = document.querySelector("#proj-2");

  const projtext1 = [
    "#html-text",
    "#css-text",
    "#psql-text",
    "#dj-text",
    "#tcss-text",
    "#py-text",
  ];
  const projtext2 = [
    "#html-text",
    "#css-text",
    "#py-text",
    "#fast-text",
    "#js-text",
  ];

  const allText = [
    "#html-text",
    "#css-text",
    "#psql-text",
    "#py-text",
    "#sqlite-text",
    "#mysql-text",
    "#dj-text",
    "#fast-text",
    "#react-text",
    "#tcss-text",
    "#dart-text",
    "#js-text",
    "#flutter-text",
  ];

  addHoverEffect(proj1, projtext1, allText);
  addHoverEffect(proj2, projtext2, allText);

  const nonskill = (array1, array2) => {
    // Find unique values in array1
    var uniqueArray1 = array1.filter(function (value) {
      return !array2.includes(value);
    });

    // Find unique values in array2
    var uniqueArray2 = array2.filter(function (value) {
      return !array1.includes(value);
    });

    // Combine the unique arrays
    var result = uniqueArray1.concat(uniqueArray2);

    // Return the result
    return result;
  };

  /* popup content */

  const popupButtons = document.querySelectorAll(".popupButton");
  const popupContainer = document.querySelector(".popupContainer");
  const popupTitle = document.querySelector("#popupTitle");
  const popupText = document.querySelector("#popupText");
  const popupImg = document.querySelector("#popupImg");
  const popupImg2 = document.querySelector("#popupImg2");
  const popupImg3 = document.querySelector("#popupImg3");

  const closeButton = document.querySelector(".closeButton");

  popupButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const content = button.getAttribute("data-content");
      const list_content = content.split(",");
      popupTitle.textContent = list_content[0];
      popupText.textContent = list_content[1];
      popupImg.src = list_content[2];
      popupImg2.src = list_content[2];
      popupImg3.src = list_content[2];
      popupContainer.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });
  /* SWipe the pic */
  const swipeDiv = document.getElementById("swipeDiv");
  let startX = 0;
  let distX = 0;

  swipeDiv.addEventListener("touchstart", handleTouchStart, false);
  swipeDiv.addEventListener("touchmove", handleTouchMove, false);
  swipeDiv.addEventListener("touchend", handleTouchEnd, false);

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    distX = event.touches[0].clientX - startX;
  }

  function handleTouchEnd() {
    if (distX > 0) {
      // Swiped from left to right
      swipeRightFunction();
    } else if (distX < 0) {
      // Swiped from right to left
      swipeLeftFunction();
    }
  }

  function swipeRightFunction() {
    // Function to be called for left to right swipe

    var imgElement = document.getElementById("profile-img");
    const src = imgElement.getAttribute("src");
    const currentProfile = src.at(-5);

    if (currentProfile == 1) {
      null;
    } else if (currentProfile == 2) {
      changeProfile(1);
    } else if (currentProfile == 3) {
      changeProfile(2);
    }
  }

  function swipeLeftFunction() {
    // Function to be called for right to left swipe

    var imgElement = document.getElementById("profile-img");
    const src = imgElement.getAttribute("src");
    const currentProfile = src.at(-5);

    if (currentProfile == 3) {
      null;
    } else if (currentProfile == 2) {
      changeProfile(3);
    } else if (currentProfile == 1) {
      changeProfile(2);
    }
  }
});
