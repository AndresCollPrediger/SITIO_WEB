

    swal("Binvenido/a!", "Gracias por visitar Electrónica Derivada!")
        .then((value) => {
            swal("Por favor ingrese su edad;", {
                content: "input",
            })
                .then((value) => {

                    if (value > 0 && value < 18) {
                        var edad = "menor de edad";
                        swal({
                            title: "Eres menor de edad!",
                            text: "¡Ingresa bajo su responsabilidad!",
                            icon: "warning",
                        });
                    } else {
                        if (value >= 18) {
                            var edad = "mayor de edad";
                        }else{
                            location. reload();
                        }
                    }
                });

        });


