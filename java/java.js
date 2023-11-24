
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
        else {
            formu.reset();
            alert("Formulario enviado correctamente")
            return false
        }
      }
      document.addEventListener("click", (e) => {
        if (e.target === $ENVIAR) {
            e.preventDefault();

        
        }
      })


window.addEventListener("load", ()=> {
    let lon
    let lat
    let temperaturaValor=document.getElementById("temperatura")
    let iconoAnimado=document.getElementById("iconoAnimado")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position.coords.latitude)
            lon=position.coords.longitude
            lat=position.coords.latitude

            const url = "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d6217a1921983f7eda3eab29bcde7044"

            fetch(url)
            .then( Response => {return Response.json()})
            .then( data =>{
                console.log(data.main.temp)
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = " Según tu ubicación la temperatura es: " + temp +"°"
            } )
            .catch(error =>{
                console.log(error)
            })
        })
    }
})
