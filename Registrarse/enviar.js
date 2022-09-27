



function enviar(event) {
    event.preventDefault();
   swal({
    title: "Verificación Exitosa!",
    text: "¡Gracias por registrarte!",
    icon: "success",
    })
    .then ((value) => {
        if(value == true){
            location.reload();
        }else{
            location.reload();
        }   
    });
  
}

