class RepositorioView {
  template(repositorio) {
    if (repositorio.language == null){
      repositorio.language = "Não informado";
    }
    return ` 
      <div class="repositorios">
        <a href="${repositorio.url}" target="blank">${repositorio.nome}, ${repositorio.language}</a
      </div> `;                                                     
  }
}

  