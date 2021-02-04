class Repositorio {
  constructor(nome, url, language) {
    this._nome = nome;
    this._url = url;
    this._language = language;
  }
  
  _retornaRepositorio() {
    return {
      nome: this._nome,
      url: this._url,
      language: this._language
    };
  }
  
  get retornaRepositorio() {
     return this._retornaRepositorio();
  }
}