var numeros = 100;
for(var i=1; i<=numeros; i++)
{
  if (i % 3 == 0)
 {
  document.write("fizz");
  }
 if (i % 5==0)
   {
    document.write("buzz");
  }

  if (i%3 !=0 && i % 5 !=0 )
  {
    document.write(i);
  }
  document.write("<hr>");
}
