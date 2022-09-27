
let click = document.getElementById('formmm');
click.onsubmit = enviar_1;

function enviar_1(event) {
    event.preventDefault();
   swal({
        title: "Enivado!",
        text: "¡Gracias por comentar!",
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




