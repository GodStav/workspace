import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Some dois números inteiros !
        </p>
        <div className="Sum">
          <p className="Info">Insira o primeiro valor:</p>
          <input type="text" id = "n1"/><br/>
          <p className="Info">Insira o segundo valor:</p>
          <input type="text" id = "n2"/><br/>
          <p className="Info">Informe o operador:</p>
          <select id="operators">
            <option value="+">+</option>
          </select><br/>

          <p className="Info">Resultado:</p>
          <button onClick={calc}>=</button>
          <input type="text" id = "result"></input>
        </div>
      </header>
    </div>
  );
}

function calc() {
  var n1 = parseInt(document.getElementById('n1').value);
  var n2 = parseInt(document.getElementById('n2').value);
  var oper = document.getElementById('operators').value;

  if(oper === '+')
  {
    document.getElementById('result').value = n1+n2;
  }
}

export default App;
