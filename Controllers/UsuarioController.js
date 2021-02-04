class UsuarioController {
  constructor() {
    throw new Error("Operação inválida");
  }
  
  static geraUsuario(urlUsuario) {
    let containerUsuario = document.querySelector(".container-usuario");
    let reqGitHub = new XMLHttpRequest();
  
    reqGitHub.open("GET", urlUsuario);
  
    reqGitHub.onload = () => {
      try {
        if (reqGitHub.status !== 200) {
          throw new Error("Não foi possível concluir sua pesquisa.");
        }
  
      let divUsuario = document.getElementById("usuario");
      let viewUsuario = new UsuarioView();
      let reqParse = JSON.parse(reqGitHub.responseText);
  
      let usuarioGit = {
        login: reqParse.login,
        nome: reqParse.name || "Não informado",
        avatar: reqParse.avatar_url,
        bio: reqParse.bio || "Não informado",
        email: reqParse.email || "Não informado",
        repos: reqParse.public_repos,
      };
  
          let montaUsuario = new Usuario(
            usuarioGit.login,
            usuarioGit.nome,
            usuarioGit.avatar,
            usuarioGit.bio,
            usuarioGit.email,
            usuarioGit.repos
          );
  
          paragrafo.classList.add("invisivel");
          imagemLogo.classList.add("invisivel");
          containerUsuario.classList.remove("invisivel");
  
          divUsuario.innerHTML = viewUsuario.template(
            montaUsuario.retornaUsuario
          );
      } catch (erro) {
          if (erro) {
            let mensagemErro = document.querySelector(".mensagemErro");
  
            containerUsuario.classList.add("invisivel");
  
            mensagemErro.classList.remove("invisivel");
            setTimeout(tirarMensagemErro, 3000);
  
            function tirarMensagemErro() {
              mensagemErro.classList.add("invisivel");
            }
          }
        }
    };
  
      reqGitHub.send();
  }
}