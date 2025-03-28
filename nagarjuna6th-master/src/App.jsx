import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./First";
import Second from "./second";
import MyRoutes from "./MyRoutes";
import { MyContextProvider } from "./Layout/myContext";

const MyThemeContext = createContext();
function App() {
  const [count, setCount] = useState(0);

  let [myTheme, setMYTheme] = useState("");

  return (
    <>
      <MyThemeContext.Provider>
        <button
          className={`${myTheme == "dark" ? "dark-" : ""}bttn btn`}
          style={{ position: "fixed", top: "80%", right: "0%", zIndex: 99 }}
          onClick={() => {
            if (myTheme === "dark") {
              setMYTheme("light");
            } else {
              setMYTheme("dark");
            }
          }}
        >
          {myTheme === "dark" ? "DARK" : "LIGHT"}
        </button>
        <MyContextProvider>
          <MyRoutes />
        </MyContextProvider>
      </MyThemeContext.Provider>
    </>
  );
}

export default App;
