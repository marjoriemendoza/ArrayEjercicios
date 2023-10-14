const arreglo=[1,2,3,4,5,6,7,8,9,10]
const result=arreglo.map((x) => x*7)

result.forEach((x,index) => {
    const arreglo2 = arreglo[index];
    console.log(arreglo2+"*7="+x)
    
});
