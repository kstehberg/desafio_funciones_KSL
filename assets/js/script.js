/*function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
  }
  
  // Cambia el color a amarillo al hacer clic en el párrafo
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
  });
  */

  function pintar(ele, color){
    ele.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, 'yellow'));

pintar(ele, "green")
