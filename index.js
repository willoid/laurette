const blues = document.getElementsByClassName("blue");

const showBlue = () => {
  console.log(blues);
  let result = blues.map((item) => {
    item.classList.add("show");
  });
  return result;
};

let travaux = document.getElementById("travaux");
travaux.addEventListener("mouseover", showBlue);
