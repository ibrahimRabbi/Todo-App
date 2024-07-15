import { Provider } from "react-redux"
import Todo from "./pages/Todo"
import store from "./redux/store"

 

 
function App() {
  
  return (
    <Provider store={store}>
      <Todo/>
     </Provider>
  )
}

export default App
