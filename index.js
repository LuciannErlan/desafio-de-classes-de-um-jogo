class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
    atacar() {
      switch (this.type) {
        case 'mago':
          console.log('O mago atacou usando magia');
          break;
        case 'guerreiro':
          console.log('O guerreiro atacou usando espada');
          break;
        case 'monge':
          console.log('O monge atacou usando artes marciais');
          break;
        case 'ninja':
          console.log('O ninja atacou usando shuriken');
          break;
        default:
          console.log('Tipo de herói inválido');
          break;
      }
    }
  }
  
  let mago = new Hero("Alladin", 25, "mago");
  mago.atacar(); // Saída: O mago atacou usando magia
  
  let guerreiro = new Hero("Arthur", 30, "guerreiro");
  guerreiro.atacar(); // Saída: O guerreiro atacou usando espada
  
  