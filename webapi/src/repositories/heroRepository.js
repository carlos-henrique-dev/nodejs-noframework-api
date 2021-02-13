const { readFile, writeFile } = require("fs/promises");

// repositório responsável por controlar a leitura e escrita no banco de dados (arquivo json)
// recebe um arquivo json e faz o parse dele
// depois de feito o parse, o repositório pode ser usado para ler e buscar um hero específico ou criar um novo
class HeroRepository {
  constructor({ file }) {
    this.file = file;
  }

  // faz o parse do arquivo recebido
  async _currentFileContent() {
    return JSON.parse(await readFile(this.file));
  }

  // busca os Heroes
  // se tiver id retorna o Hero escolhido
  // se não tiver id, retorna todos
  async find(itemId) {
    const all = await this._currentFileContent();
    if (!itemId) return all;

    return all.find(({ id }) => itemId === id);
  }

  // adiciona um novo Hero no arquivo
  async create(data) {
    const currentFile = await this._currentFileContent();
    currentFile.push(data);

    await writeFile(this.file, JSON.stringify(currentFile));

    return data.id;
  }
}

module.exports = HeroRepository;
