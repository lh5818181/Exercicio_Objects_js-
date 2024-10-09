// Classe abstrata "Veiculo" - uma abstração de um veículo genérico
class Veiculo {
    constructor(marca, modelo) {
      // Construtor define marca e modelo do veículo
      this.marca = marca; // Atributo marca
      this.modelo = modelo; // Atributo modelo
    }
  
    // Método abstrato "movimentar", que deverá ser implementado nas classes filhas
    movimentar() {
      throw new Error("Este método deve ser implementado pela subclasse");
    }
  
    // Método comum que pode ser usado por todas as subclasses
    detalhes() {
      console.log(`Veículo: ${this.marca} ${this.modelo}`);
    }
  }
  
  // Classe "Carro" que herda da classe "Veiculo"
  class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
      // Chama o construtor da classe pai (Veiculo)
      super(marca, modelo);
      this.portas = portas; // Atributo específico de Carro
    }
  
    // Implementação do método abstrato movimentar
    movimentar() {
      console.log(`${this.marca} ${this.modelo} está dirigindo na estrada.`);
    }
  }
  
  // Classe "Moto" que herda da classe "Veiculo"
  class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
      // Chama o construtor da classe pai (Veiculo)
      super(marca, modelo);
      this.cilindradas = cilindradas; // Atributo específico de Moto
    }
  
    // Implementação do método abstrato movimentar
    movimentar() {
      console.log(`${this.marca} ${this.modelo} está acelerando na pista.`);
    }
  }
  
  // Criando instâncias de objetos
  
  // Instância de um Carro
  const carro1 = new Carro('Toyota', 'Corolla', 4); 
  // Cria um novo objeto da classe Carro com 4 portas
  carro1.movimentar(); // Chama o método movimentar específico da classe Carro
  carro1.detalhes();   // Chama o método detalhes herdado da classe Veiculo
  
  // Instância de uma Moto
  const moto1 = new Moto('Honda', 'CB500', 500); 
  // Cria um novo objeto da classe Moto com 500 cilindradas
  moto1.movimentar(); // Chama o método movimentar específico da classe Moto
  moto1.detalhes();   // Chama o método detalhes herdado da classe Veiculo
  
  // Instância de outro Carro
  const carro2 = new Carro('Ford', 'Fiesta', 2); 
  // Cria um novo objeto da classe Carro com 2 portas
  carro2.movimentar(); // Chama o método movimentar específico da classe Carro
  carro2.detalhes();   // Chama o método detalhes herdado da classe Veiculo
  