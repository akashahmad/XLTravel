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
