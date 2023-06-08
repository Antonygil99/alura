//HOLA MUNDO
function copy() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
  
  function encriptar(){
      demoDisplay();
      myFunction();
  }
  
  function desencriptar(){
      demoDisplay();
      myFunction2();
  }
  
  function demoDisplay() {
    document.getElementById("frase-in").style.display = "none";
    document.getElementById("titulo-in").style.display = "none";
    document.getElementById("titulo-in-2").style.display = "none";
    document.getElementById("frase-in-2").style.display = "none";
    
  }
  
  //Encriptar
  function myFunction() {
  
      function encript(text){
  
  
              
              //realizo el mapeo mediante un objeto a cada vocal con su respectivo cambio
              var mapObj = {
                 a:"ai",
                 e:"enter",
                 i:"immes",
                 o:"outro",
                 u:"ufat"
              };
  
              //utilizo el método replace para hacer uso de las expresiones regulares a e i o u y que sustituya todas las variables con g.
              //la funcion recibe cada uno de los elementos del objeto anteriormente definido y cuando se alcance una letra definida en replace, esta letra será retornada para ser sustituida por replace.
              text = text.replace(/a|e|i|o|u/g, function(matched){
                return mapObj[matched];
              });
  
              return text;
          
  
      }
      
  
    //tomamos los datos que se reciban en una etiqueta de html previamente identificada con el metodo getElementById y asignamos ese valor con el metodo value a una variable que definamos como "x"
    var x = document.getElementById("myTextarea").value;
  
    if (!x) {
        console.log("hola no sirve")
        document.getElementById("titulo-in-2").innerHTML = "No se ha encontrado el mensaje";
      document.getElementById("titulo-in-2").innerHTML = "ingresa el texto que desees encrptar o desencriptar";
      
    }
    else{
          //asignamos el retorno de la función encriptar a una variable llamada "enc"
    demoDisplay();
    var enc = encript(x);
    //Y finalmente mostramos el contenido del retorno de la función encriptar en una etiqueta con fuente html identificada con la id demo
    document.getElementById("demo").innerHTML = enc;
    document.getElementById("myInput").innerHTML = enc;
    }
  
  }
  
  //Desencriptar
  function myFunction2(){
  
      function dencript(text){
  
              
  
          let vocala = /ai/gi;
          let vocale = /enter/gi;
          let vocali = /immes/gi;
          let vocalo = /outro/gi;
          let vocalu = /ufat/gi;
          const newstr = text.replace(vocala, "a")
          .replace(vocalu,"u")
          .replace(vocalo,"o")
          .replace(vocale,"e")
          .replace(vocali,"i");
          
          
         
          return newstr;
          
  
      }
  
  
    var x = document.getElementById("myTextarea").value;
    if(!x){
      console.log("hola no sirve")
        document.getElementById("titulo-in-2").innerHTML = "No se ha encontrado el mensaje";
      document.getElementById("titulo-in-2").innerHTML = "No se ha encontrado el mensaje";
    }
    else{
      demoDisplay();
      denc = dencript(x);
        document.getElementById("demo").innerHTML = denc;
        document.getElementById("myInput").innerHTML = denc;
    }
  
  }
  