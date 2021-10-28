let usuarios = ["Adriano","Marcia", "Matheus"];

function inserirUsuario(nome, callback){
    setTimeout(()=>{
        usuarios.push(nome);
        callback();
    }, 3000);
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Igor", listarUsuarios);

//callback é um tipo de função que só é executada após o processamento de outra função