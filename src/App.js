import Header from "./components/Header";
import Counter from "./components/Counter";
import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import { Provider } from "react-redux";


function App() {

  const allReducers = combineReducers({counter: counterReducer})
  const store = createStore(allReducers)

  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
