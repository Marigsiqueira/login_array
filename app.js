    function usuarios() { 
    var users= [  //guardar array na variável users
 
    { login: "mariana", senha: "mariana"},
    { login: "evellyn", senha: "evellyn"},
    { login: "mayara", senha: "mayara"}

  ]
    return users;
    //return usuarios;
    //console.log(usuarios)
    
}
function Entradalogin() {
    var dao = usuarios(); //guardar a função usuarios na variável dao

    let user = (document.getElementById("login").value); //pegando o valor do input login e guardando na variavel user
    let pass = (document.getElementById("senha").value); //pegando o valor dp input senha e guardando na variável pass


    for (let i = 0; i < dao.length; i=i+1) { //fazer um lopping para verificar todas os indices do array. 
        if (user == dao[i].login && pass== dao[i].senha) { //condição de verificação para ver se o que o usuario digtitou é igual a senha e login já cadastrado
            //console.log("Logado")
            window.alert("Logado");
            window.location.href="C:\Users\Monica\Desktop\logon com array\dados.html"           
            break;
        
        } else {
            window.alert("Não cadastrado");
        }
    }
} 
 


    