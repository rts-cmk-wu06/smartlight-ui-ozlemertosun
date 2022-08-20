import { motion } from "framer-motion";
import { Route, Routes, Navigate } from "react-router";
import CpHome from "./pages/CpHome";
import SettingsPage from "./pages/SettingsPage";
import "./styles/App.css";
import "./styles/index.css";
import Navigation from "./assets/components/Navigation";

function App() {
  return (
    <div className="App relative">
      {/*       <motion.div
        initial={{ rotate: 360 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="relative top-0 left-0 z-10"
      >
        <div className=" absolute h-[194px] w-[194px] rounded-full bg-[#FFFFFF05]"></div>
        <div className=" absolute left-48 top-20 h-[194px] w-[194px] rounded-full bg-[#FFFFFF05]"></div>
        <div className=" absolute top-52 left-4 h-[194px] w-[194px] rounded-full bg-[#FFFFFF05]"></div>
      </motion.div> */}

      <Routes>
        <Route path="/" element={<CpHome />} />
        <Route path="/settings/:name" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
