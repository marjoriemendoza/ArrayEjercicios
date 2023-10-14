const arreglo =[10,"5","7",9,23,"17"]

const result=arreglo.filter(x=>Number(x)).reduce((a,b)=>{

    return a*b
});

console.log(result)