let dataRecursividad = [];
let i = 0;
const fibRecursividad = async (n) => {
    if (i <= 1) {
        dataRecursividad[i] = i
    }else{
        dataRecursividad[i] = dataRecursividad[i-2] + dataRecursividad[i - 1]
    }

    i++;
    if (dataRecursividad.length < n) {
        fibRecursividad(n)
    }
}

const imprimirRecursividad = async () => {
    await fibRecursividad(10)
    dataRecursividad.map(n => {
        console.log(n)
    })
}

const data = []
const fib = async(n) => {
    for(j = 0; j < n; j++){
        if(j <=1){
            data[j] = j
        }else {
            data[j] = data[j-2] + data[j - 1]
        }
    }
}

const imprimir = async() => {
    await fib(10);
    data.map(n => {
        console.log(n)
    })
}




//imprimirRecursividad()
imprimir()