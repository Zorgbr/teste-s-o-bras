* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f5;
  color: #222;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

.container > h1 {
  margin-bottom: 30px;
}

.cursos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.curso,
.detalhes {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.curso h2 {
  margin-top: 0;
}

.curso p {
  line-height: 1.5;
}

.botao,
.voltar {
  border: none;
  border-radius: 8px;
  padding: 12px 18px;
  cursor: pointer;
  font-size: 15px;
}

.botao {
  background: #111;
  color: white;
  margin-top: 10px;
}

.botao:hover {
  background: #333;
}

.voltar {
  background: #ddd;
  margin-bottom: 20px;
}

.detalhes {
  max-width: 800px;
}

.detalhes h1 {
  margin-top: 0;
}

.detalhes h3 {
  margin-top: 25px;
}

.detalhes p {
  line-height: 1.6;
}

.erro {
  background: #ffe5e5;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}
