
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;

var lienzo = d.getContext("2d");

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yf, xi;
  var colorcito = "red";
  var espacio = ancho/lineas;

   d.width = d.width

  for(l=0; l<lineas; l++)
  {
     yf = espacio * l;
     xi = espacio * (l + 1);
     dibujarlinea(colorcito, xi, 0, 300, yf);
     console.log("linea" + l);
  }

  dibujarlinea(colorcito, 299,1,299,299);
  dibujarlinea(colorcito, 1,1,299,1);

  function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

  }

}
