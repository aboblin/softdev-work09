var svg_area = document.getElementById('svg');
var name_space = "http://www.w3.org/2000/svg";
var circle;

var clear_button = document.getElementById('clear');

var circle_junk = function(e) {

  var circ = document.createElementNS(name_space, "circle");
  circ.setAttribute("cx", e.offsetX);
  circ.setAttribute("cy", e.offsetY);
  circ.setAttribute("r", 10);
  circ.setAttribute("fill", "blue");
  svg_area.appendChild( circ );

  circ.addEventListener("click", change_color)

}

var change_color = function(e) {
  this.setAttribute("fill", "green");
  e.stopPropagation();

  this.addEventListener("click", move_boy);
}

var move_boy = function(e) {
  console.log(e.target);
  svg_area.removeChild(e.target);

  var circ = document.createElementNS(name_space, "circle");
  circ.setAttribute("cx", Math.random() * svg_area.getAttribute("width"));
  circ.setAttribute("cy", Math.random() * svg_area.getAttribute("height"));
  circ.setAttribute("r", 10);
  circ.setAttribute("fill", "red");
  svg_area.appendChild( circ );

  circ.addEventListener("click", change_color)

  e.stopPropagation();
}

var clear_screen = function (e) {
  while (svg_area.lastChild) {
    svg.removeChild(svg.lastChild);
  }
}

clear_button.addEventListener("click", clear_screen);
svg_area.addEventListener("click", circle_junk);
