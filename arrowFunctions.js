
        let dobro = function (){
            return 2 * this.x;
        }
        let numero = {
            x:8,
            d: dobro
        }
        
      //  let dobro = () => 2 * x; // arrow functions não entende muito bem o que é o this

        console.log(numero.d());