let i = 1;
let resultRecursividad = 1
const factorialRecursividad = async(n) => {
    if(n == 0){
        return
    }else{
        resultRecursividad = resultRecursividad * i
    } 
    i++;
    if(n >= i){
        factorialRecursividad(n)
    }
}

const imprimirRecursividad = async(n) =>{
    await factorialRecursividad(n);
    console.log(`El Factorial de ${n} es ${resultRecursividad}`);
}

let result = 1;
const factorial  = async(n) => {
    if(n == 0){
        return
    }else{
        for(j = 1; n >= j ; j++){
            result = result * j
        }
    }
}

const imprimir = async(n) =>{
    await factorial(n);
    console.log(`El Factorial de ${n} es ${result}`);
}

imprimir(5)
imprimirRecursividad(5)