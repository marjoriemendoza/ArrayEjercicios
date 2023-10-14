const Usuarios=[
{
    name:"Rafael perez",
    email:"rafael@gmail.com"
},
{
    name:"Rosario perez",
    email:"rosario@gmail.com"
},
{
    name:"Rodrigo avila",
    email:"rodrigo@gmail.com"
},
{
    name:"Alberto Campos",
    email:"alberto@gmail.com"
}
]

const result=Usuarios.find(Usuarios=>Usuarios.email==='rosario@gmail.com');
    console.log(result)

