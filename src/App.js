import Todos from "./components/Todos"
import {useState, useEffect} from 'react'

function App() {

  const getInitialState = () => JSON.parse(window.localStorage.getItem("mode"));

  const [darkMode, setDarkMode] = useState(getInitialState)

  useEffect(() => {

    window.localStorage.setItem('mode', JSON.stringify(darkMode))
    console.log(window.localStorage.mode)

  }, [darkMode])

  return (
    <div className={`container my-4 ${darkMode ? "bg-dark" : ""}`}>
      <h1 className={`text-center ${darkMode ? 'text-white' : ' '}`}>ToDos App</h1>
      <Todos darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default App
