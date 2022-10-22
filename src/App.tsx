import { Routes, Route } from "react-router-dom";
import FormPage from "./components/pages/FormPage";
import PalettePage from "./components/pages/Palette/PalettePage";
import Navigate from "./components/ui/Navigate";
import { styles } from "./utils/stylesClasses";

function App() {
  return (
    <div className="bg-black py-10 min-h-[100vh]">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Navigate />
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/palette" element={<PalettePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
