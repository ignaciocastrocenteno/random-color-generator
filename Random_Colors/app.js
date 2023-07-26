const h1 = document.querySelector("h1");
const changer = document.querySelector("#changer");

function createRandomColor() {
  const rnd1 = Math.floor(Math.random() * 255);
  const rnd2 = Math.floor(Math.random() * 255);
  const rnd3 = Math.floor(Math.random() * 255);

  return `rgb(${rnd1}, ${rnd2}, ${rnd3})`;
}

changer.addEventListener("click", () => {
  const color = createRandomColor();
  h1.innerText = color;
  document.body.style.backgroundColor = color;
});
