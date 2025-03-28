import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./First";
import Second from "./second";
import MyRoutes from "./MyRoutes";
import "./mystyle.css";
import { MyContextProvider } from "./hooks/myContext";
import counterReducer from "./pages/Redux/counterReducer";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import personReducer from "./pages/Redux/personReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

export const MyThemeContext = createContext();

function App() {
  //const myStore = createStore(counterReducer);
  //const myStore = createStore(personReducer);

  const myCombinedStore = combineReducers({
    counterStore: counterReducer,
    personStore: personReducer,
  });

  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, myCombinedStore);

  const myStore = createStore(persistedReducer);
  let persistor = persistStore(myStore);

  let [myTheme, setMyTheme] = useState("");
  return (
    <>
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
          <MyThemeContext.Provider value={myTheme}>
            <button
              className={`${myTheme == "dark" ? "dark-" : ""} btn`}
              style={{
                position: "fixed",
                top: "50%",
                right: "2%",
                zIndex: 99,
              }}
              onClick={() => {
                if (myTheme === "dark") {
                  setMyTheme("");
                } else {
                  setMyTheme("dark");
                }
              }}
            >
              {myTheme === "dark" ? "DARK" : "LIGHT"}
            </button>
            <MyContextProvider>
              <MyRoutes />
            </MyContextProvider>
          </MyThemeContext.Provider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
