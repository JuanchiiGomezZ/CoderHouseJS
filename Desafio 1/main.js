// Tablas de Multiplicar
let num = prompt("Ingrese el numero que desea multiplicar: ");

let lastNum = prompt("Ingrese hasta que numero desea conocer su tabla: ");

let parImpar =prompt("Digite: 1. Para mostrar todos | 2. Para solo los pares | 3. Para los impares");


     
        if(parImpar == 1){
            console.log("Numeros de la tabla del: " + num)
            for(let i = 1; i<=lastNum; i++){
                tabla = num * i;
                console.log( num + "x" + i + "=" + tabla);
            }
        }
        
        else if(parImpar == 2){
            console.log("Numeros pares de la tabla del: " + num)
            for(let i = 1; i<=lastNum; i++){
                tabla = num * i;
                if(tabla % 2 == 0){
                    console.log( num + "x" + i + "=" + tabla);
                }
            }       
        }
        
        
        else if (parImpar == 3){
            console.log("Numeros impares de la tabla del: " + num)
            for(let i = 1; i<=lastNum; i++){
                tabla = num * i;
                if(tabla % 2 != 0){
                    console.log( num + "x" + i + "=" + tabla);
                }  
            }
        }
        else if (parImpar== 4){
        }
        
        else{
            console.log("El numero ingresado es incorrecto");
            console.log("Intente nuevamente");
        }
    






