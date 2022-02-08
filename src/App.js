import { motion } from 'framer-motion';
import CpHome from './pages/CpHome';
import SettingsPage from './pages/SettingsPage';
import './styles/App.css';
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <motion.div initial={{rotate:360}} animate={{rotate:0}} transition={{duration:40,repeat:Infinity, ease:"linear"}} className='relative top-0 left-0 -z-10'>
        <div className=' absolute h-[194px] w-[194px] rounded-full bg-[#FFFFFF05]'></div>
        <div className=' absolute left-48 top-20 h-[194px] w-[194px] rounded-full bg-[#FFFFFF05]'></div>
        <div className=' absolute top-52 left-4 h-[194px] w-[194px] rounded-full bg-[#FFFFFF05]'></div>
      </motion.div>
        <CpHome />
        <SettingsPage />
    </div>
  );
}

export default App;
