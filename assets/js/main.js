changeColor = () => {
  const bodyColor = document.body;
  const inputColor = document.body.querySelector("#inputColor");
  const color = inputColor.value;
  bodyColor.style.backgroundColor = color;
};
