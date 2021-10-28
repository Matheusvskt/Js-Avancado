let usuarios = ["Adriano", "Marcia", "Matheus"];

function inserirUsuario(nome) {

    let promise = new Promise(function(resolve, reject){
        
    setTimeout(() => {
        usuarios.push(nome);

        let error = false;

        if(!error){
            resolve()
        }else{
            reject({msg:"erro de qualquer coisa"})
        }
    }, 3000);
    })

    return promise


}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Igor").then(listarUsuarios).catch((error)=>{
    console.log(error.msg)
});