// import Content from './components/Content';
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home';
import Business from './components/Buisness';
import Cricket from './components/Cricket';
import Science from './components/Science';
import Health from './components/Health';
import General from './components/General';
function App() {
  return (
    <>
    < div className='cls' style={{background:"#343a40"}}>
      <Navbar/>
      {/* <Home/> */}
      
      {/* <Business/> */}
      {/* <Cricket/> */}
      {/* <Science/> */}
      {/* <Health/> */}
      <General/>
      <footer   style={{background:"#212529",color:"white",textAlign:"center" , height:"50px",margin:"10px 0px" ,bottom:"0"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50px"}}>This is Footer.</div>
      </footer>
      
    </div>
      </>
  );
}

export default App;
