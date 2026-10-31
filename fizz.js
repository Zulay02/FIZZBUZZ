var numeros = 100;
var resultado = document.getElementById("resultado");

for (var i = 1; i <= numeros; i++)
{
    var fizz = esDivisible(i, 3);
    var buzz = esDivisible(i, 5);
    var texto = "";

    if (fizz)
    {
        texto = texto + "Fizz";
    }

    if (buzz)
    {
        texto = texto + "Buzz";
    }

    if (!fizz && !buzz)
    {
        texto = i;
    }

    // Se crea una linea nueva con el texto y se agrega a la pagina.
    var linea = document.createElement("div");
    linea.textContent = texto;
    resultado.appendChild(linea);
}

function esDivisible(num, divisor)
{
    return num % divisor == 0;
}
