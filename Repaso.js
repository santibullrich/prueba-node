// REPAS

    
    function agregarHttp(url) {
        return "http://" + url;
    }
    
    function procesar(lista, unaFuncion){
        let array = []
      for (i = 0 ; i < lista.length ; i++) {
                let nuevo = [i];
                array.push(unaFuncion(nuevo))
         
      }
      return array
    }
    
    console.log (procesar(["www.google.com", "www.yahoo.com"], agregarHttp))




    