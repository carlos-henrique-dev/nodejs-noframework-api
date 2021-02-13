class Hero {
  // cria um novo heroi com os dados passados
  // o id é criado com um número de 0 a 100 + data atual em milisegundos
  constructor({ name, age, power }) {
    this.id = Math.floor(Math.random() * 100) + Date.now();
    this.name = name;
    this.age = age;
    this.power = power;
  }

  // verifica se os campos do Hero criado são válidos, se não for adiciona uma stringn um array de erros
  // re retorna uma flag booleana e o array vazio/com os erros
  isValid() {
    const propertyNames = Object.getOwnPropertyNames(this);
    const amountInvalid = propertyNames
      .map((property) => (!!this[property] ? null : `${property} is missing!`))
      .filter((item) => !!item);

    return {
      valid: amountInvalid.length === 0,
      error: amountInvalid,
    };
  }
}

module.exports = Hero;
