
    document.write(Date());

        var cartasOriginales;

        var dinero = 3;

        function f_iniciar(){
            document.getElementById("mensaje").innerHTML = "";

            if (0 == dinero || -1 == dinero){
                document.getElementById("mensaje").innerHTML = "¡ NO HAY DINERO !" + "<br/>" + "REINICIA para SEGUIR JUGANDO";
                document.getElementById("botonNuevaPartida").style.display = "none";
                return;
            }

            document.getElementById("dineroActual").innerHTML = dinero;

            cartasOriginales = ["imagenes/0.jpg",
                                "imagenes/1.jpg",
                                "imagenes/2.jpg"];

            f_taparCartas();

            f_asignarAs();

            var lasCartas = document.getElementsByName("cartas");

            for (var indice in lasCartas){
                lasCartas[indice].disabled = false;
            }

            document.getElementById("botonMostarCartas").style.display="none";
            document.getElementById("botonNuevaPartida").style.display="none";

        }

        function f_taparCartas(){
            var lasCartas = document.getElementsByName("cartas");

            for (var posicion in lasCartas){
                lasCartas[posicion].src="imagenes/carta_reves.jpg";
            }        
        }

        function f_asignarAs(){
            var posicionAS = f_generarAleatorio();
            cartasOriginales[posicionAS]="imagenes/3.jpg";
        }

        function f_visualizarCarta(evento){

            var fuente = evento.target;
            var cartaID = fuente.id;
            var cartaPosicion = parseInt(cartaID);
            var lasCartas = document.getElementsByName("cartas");
            var queCarta = cartasOriginales[cartaPosicion];

            lasCartas[cartaPosicion].src = queCarta;

            if(queCarta == "imagenes/3.jpg"){
                document.getElementById("mensaje").innerHTML = "¡ PREMIO - Ganas 1 € !";
                dinero +=1;
            } else if (queCarta == "imagenes/2.jpg") {
                document.getElementById("mensaje").innerHTML = "¡ LA MUERTE te lleva 2 € !";
                dinero -=2;
            } else {
                document.getElementById("mensaje").innerHTML = "¡ FALLASTE - pierdes 1 € !";
                dinero -=1;
            }

            for (var indice in lasCartas){
                lasCartas[indice].disabled = true;
            }

            document.getElementById("botonMostrarCartas").style.display="block";
            document.getElementById("botonNuevaPartida").style.display = "block";
            document.getElementById("dineroActual").innerHTML = dinero;

        }

        function f_mostrarCartas(){
            var lasCartas = document.getElementsByName("cartas");

            for (var posicion in lasCartas){
                lasCartas[posicion].src = cartasOriginales[posicion];
            }
        }

        function f_generarAleatorio(rango){

            if(rango == undefined){
                rango = 3;
            }

            var aleatorio = parseInt(Math.random()* rango);
            return aleatorio;

        }
    