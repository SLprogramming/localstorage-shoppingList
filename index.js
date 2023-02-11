const inputTag = document.getElementsByClassName("form-control")[0];
const addBtn = document.getElementsByClassName("icon-div")[0];
const listDiv = document.getElementsByClassName("list-div");
const listContainer = document.getElementsByClassName("list-container")[0];
const textDiv = document.getElementsByClassName("textDiv")[0];
const iconDiv = document.getElementsByClassName("iconDiv");
const getFromLocal = JSON.parse(localStorage.getItem("Item")) || [];
const renderFunction = (array) => {
  for (i = 0; i < array.length; i++) {
    listContainer.innerHTML += `<div class="list-div" >
    <div class="textDiv">${i + 1}.${array[i].title}</div>
    <div class="iconDiv"  ><i class="fa-solid fa-trash-can trashIcon"></i></div>
  </div>`;
  }
  let listArr = [...iconDiv];
  for (let i = 0; i < listArr.length; i++) {
    listArr[i].addEventListener("click", () => {
      getFromLocal.splice(i, 1);
      localStorage.setItem("Item", JSON.stringify(getFromLocal));
      listContainer.innerHTML = "";
      renderFunction(getFromLocal);
    });
  }
};
renderFunction(getFromLocal);

addBtn.addEventListener("click", () => {
  inputTag.style.display = "block";
});

let arr = [...getFromLocal];
let productId = getFromLocal.length;

function showResult(event) {
  productId++;
  const inputValue = event.target.value;
  getFromLocal.push({ id: productId, title: inputValue });
  localStorage.setItem("Item", JSON.stringify(getFromLocal));
  inputTag.value = "";
  listContainer.innerHTML = "";
  renderFunction(getFromLocal);
}

inputTag.addEventListener("change", showResult);
