// Function to apply the transitionX(-10px) style to a single element
function TransformStyle1(element) {
  if (element) {
    element.style.transition =
      "all 0.4s ease, color 0.2s cubic-bezier(1,-0.95, 0, 1.31)";
    element.style.transform = "translateX(-18px) scale(0.8)";
    element.style.color = "rgb(45, 82, 58)";
  } else {
    console.error("Element is not valid");
  }
}

// Function to apply the transitionX(10px) style to a single element
function TransformStyle2(element) {
  if (element) {
    element.style.transition =
      "all 0.4s ease, color 0.2s cubic-bezier(1,-0.95, 0, 1.31)";
    element.style.transform = "translateX(18px) scale(0.8)";
    element.style.color = "rgb(45, 82, 58)";
  } else {
    console.error("Element is not valid");
  }
}

// Function to reset the transform style to the original state
function resetTransformStyle(element) {
  if (element) {
    element.style.transform = "translateX(0) scale(1)";
    element.style.color = ""; // Reset to original color
  }
}

// Select all navigation items
const navItems = document.querySelectorAll(
  "#about, #service, #projects, #contact,#home"
);

// Add mouseenter event listener to homeElement
const homeElement = document.getElementById("home");
homeElement.addEventListener("mouseenter", () => {
  navItems.forEach((item) => {
    if (item !== homeElement) {
      TransformStyle1(item); // Apply TransformStyle2 to all nav items except Projects
    }
  });
});

// Add mouseleave event listener to homeElement to reset styles
homeElement.addEventListener("mouseleave", () => {
  navItems.forEach((item) => resetTransformStyle(item)); // Reset styles for each nav item
});
// Add mouseenter event listener to aboutElement
const aboutElement = document.getElementById("about");

aboutElement.addEventListener("mouseenter", () => {
  navItems.forEach((item) => {
    if (item !== aboutElement && item !== homeElement) {
      TransformStyle1(item); // Apply TransformStyle1 to all nav items except About and Home
    }
  });
  TransformStyle2(homeElement); // Apply TransformStyle2 to the home element
});

// Add mouseleave event listener to aboutElement to reset styles
aboutElement.addEventListener("mouseleave", () => {
  navItems.forEach((item) => resetTransformStyle(item)); // Reset styles for each nav item
  resetTransformStyle(homeElement); // Reset styles for the home element
});

// Add mouseenter event listener to serviceElement
const serviceElement = document.getElementById("service");
serviceElement.addEventListener("mouseenter", () => {
  navItems.forEach((item) => {
    if (
      item !== aboutElement &&
      item !== homeElement &&
      item !== serviceElement
    ) {
      TransformStyle1(item); // Apply TransformStyle1 to all nav items except About, Home, and Service
    }
  });
  TransformStyle2(homeElement); // Apply TransformStyle2 to the home element
  TransformStyle2(aboutElement); // Apply TransformStyle2 to the about element
});

// Add mouseleave event listener to serviceElement to reset styles
serviceElement.addEventListener("mouseleave", () => {
  navItems.forEach((item) => resetTransformStyle(item)); // Reset styles for each nav item
  resetTransformStyle(homeElement); // Reset styles for the home element
  resetTransformStyle(aboutElement); // Reset styles for the about element
});

// Add mouseenter event listener to contactElement
const contactElement = document.getElementById("contact");
contactElement.addEventListener("mouseenter", () => {
  navItems.forEach((item) => {
    if (
      item !== aboutElement &&
      item !== homeElement &&
      item !== serviceElement &&
      item !== contactElement
    ) {
      TransformStyle1(item); // Apply TransformStyle1 to all nav items except About, Home, contact and Service
    }
  });
  TransformStyle2(homeElement); // Apply TransformStyle2 to the home element
  TransformStyle2(aboutElement); // Apply TransformStyle2 to the about element
  TransformStyle2(serviceElement); // Apply TransformStyle2 to the service element
});

// Add mouseleave event listener to contactElement to reset styles
contactElement.addEventListener("mouseleave", () => {
  navItems.forEach((item) => resetTransformStyle(item)); // Reset styles for each nav item
  resetTransformStyle(homeElement); // Reset styles for the home element
  resetTransformStyle(aboutElement);
  resetTransformStyle(serviceElement); // Reset styles for the about element
});
// Add mouseenter event listener to projectElement
const projectElement = document.getElementById("projects");

projectElement.addEventListener("mouseenter", () => {
  navItems.forEach((item) => {
    if (item !== projectElement) {
      TransformStyle2(item); // Apply TransformStyle2 to all nav items except Projects
    }
  });
});

// Add mouseleave event listener to projectElement to reset styles
projectElement.addEventListener("mouseleave", () => {
  navItems.forEach((item) => resetTransformStyle(item)); // Reset styles for each nav item
});
