# 🧮 Projeto Calculadora com Testes Unitários

Este é um projeto de uma calculadora web simples com o foco principal de implementar **testes unitários** utilizando o **Jest**, garantindo **100% de cobertura** da lógica de cálculo.


### 🏗️ Estrutura do Projeto

A estrutura foi desenhada para separar responsabilidades:

* **/public**: Contém todos os ficheiros que o utilizador vê no navegador (HTML, CSS e o JavaScript que manipula a interface).
* **/src**: Contém apenas a lógica pura da calculadora (as funções matemáticas). É este o "cérebro" que é testado.
* **/tests**: Contém os testes unitários que verificam o ficheiro `src/calculator.js`.


### 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **Node.js**: Utilizado como ambiente para correr os testes.
* **Jest**: Framework de testes unitários para JavaScript.


### 🚀 Como Executar o Projeto

#### 1. Instalar as Dependências

Para poder rodar os testes, primeiro precisa de instalar o Jest:

```bash
npm install
```

#### 2. Executar os Testes

Para rodar os testes unitários e gerar o relatório de cobertura, execute:

```bash
npm test
```

#### 3. Abrir a Calculadora

Para usar a calculadora, não é necessário um servidor. Basta abrir o ficheiro abaixo no seu navegador de preferência:

`public/index.html`


### 💯 Relatório de Cobertura (100%)

Todos os testes passaram, e o Jest confirmou que 100% da lógica de cálculo (comandos, linhas, funções e ramificações) está coberta por testes.

<img width="537" height="172" alt="image" src="https://github.com/user-attachments/assets/bf687b07-4f4d-4ae1-bc9e-cff1442c369d" />
