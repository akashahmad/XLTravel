const activeBorder = (id) => {
  var id = document.getElementById(id);
  if (id.classList.contains("border-2", "border")) {
    id.classList.remove("border-2", "border");
    id.classList.add("border-blue");
    console.log("if");
  } else {
    id.classList.remove("border-blue");
    id.classList.add("border-2", "border");
    console.log("else");
  }
};

const selectAllCicle = () => {
  active = document.querySelectorAll(".active");
  for (i = 0; i <= active.length; i++) {
    if (active[i].classList.contains("border-2", "border")) {
      active[i].classList.remove("border-2", "border");
      active[i].classList.add("border-blue");
    } else {
      active[i].classList.remove("border-blue");
      active[i].classList.add("border-2", "border");
      active[i].classList.add("border-blue");
    }
  }
};
