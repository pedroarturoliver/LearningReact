import "./App.css"
// 2 - Importando componente
import FirstComponent from "./components/FirstComponent"


// 4 - template expression

import Templateexpression from "./components/TemplateExpressions";



import MyComponent from "./components/MyComponent";

import Event from "./components/Event"

function App() {
  // 3 - comentários
  return (
    <div className="App">
      {/* 3 - Comentário JSX*/}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <Templateexpression/>
      <MyComponent />
      <Event />
    </div>
  )
}

export default App;