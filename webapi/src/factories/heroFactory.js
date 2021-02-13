const HeroRepository = require("../repositories/heroRepository");
const HeroService = require("../services/heroService");

const { join } = require("path");
const filename = join(__dirname, "../../database", "data.json");

// responsável por criar uma nova instância do HeroRepository
// importa o arquivo json (banco de dados) e passa o arquivo para o repositoryI
const generateInstance = () => {
  const heroRepository = new HeroRepository({
    file: filename,
  });

  const heroService = new HeroService({
    heroRepository,
  });

  return heroService;
};

module.exports = { generateInstance };
