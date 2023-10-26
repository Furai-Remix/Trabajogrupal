
const $nombre = document.getElementById("nombre"),
      $email = document.getElementById("email"),
      $TELEFONO = document.getElementById("TELEFONO"),
      $ENVIAR = document.getElementById("ENVIAR");
      


      function validateInputs(){
        const nombreregex = /^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+$/;

        const emailregex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

        const TELEFONOregex = /[d{3}-\d{3}-\d{4}]/;


        if ($nombre.value === ""){
            alert("No dejar el campo de Nombre vacio")
        }
        else if ($email.value === ""){
            alert("No dejar el campo de Email vacio")
        }    
        else if (!emailregex.test($email.value)){
            alert("Ingrese un formato correcto de Email")
        }
        else if ($TELEFONO.value === ""){
            alert("No dejar el campo del Telefono vacio")
        }
        else if (!nombreregex.test($nombre.value)){
            alert("Ingrese un formato correcto de Nombre")
        }
        else if (!TELEFONOregex.test($TELEFONO.value)){
            alert("Ingrese un formato correcto de Telefono")
        }

      }

      document.addEventListener("click", (e) => {
        if (e.target === $ENVIAR) {
            e.preventDefault();
            validateInputs();
        }
      })


let url = "https://apis.datos.gob.ar/series/api/series/?ids=tmi_arg"
fetch(url)
.then(Response => Response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData = (data) => {
    document.getElementById("divApi").innerHTML = data;
}