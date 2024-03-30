function addToCart(data) {
  if (localStorage) {
    localStorage.setItem("product", data);
  }else{
    alert("no local storage")
  }
}

module.exports = { addToCart };
