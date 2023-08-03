import mimg from './mph.jpg';
import './movies.js';
import './App.css';

function App() {
  
  return (
    <div className="App">
      
      <header className="App-header">
      <p> </p>
      <img src={mimg} alt="" style={{ width:'170px',height: '250px',position: 'absolute',top:'5%',left:'20%'}}/>
      
      <div style={{textAlign:'centre', fontSize:'30px' , color:'white'}}>
      <p> This is Priya here !</p>
      <p> Age : 20</p>
      <p> From : Tamilnadu</p>
      </div>
      
      
      </header>
      <p> </p>
        
        <movies>
          image="./mov11.jpg"
          mname="vikram "
          rdate="20jan "
          rate="4.5"
        </movies>
          
        <p> </p> 
          
        <movies>
          image="./mov12.jpg"
          mname="Harry Potter"
          rdate="18jun"
          rate="4.8"
        </movies>
  
        <p> </p> 
          
        <movies>
          image="./mov13.jpg""
          mname="Pirates of the garibbean"
          rdate="09feb"
          rate="4.7"
        </movies>
  
        <p> </p> 
          
        <movies>
          image="./mov14.jpg"
          mname="Vikkram Vedha"
          rdate="31may"
          rate="4.3"
        </movies>
          <p>
            
          </p>
          
      
      
    </div>
  );
}

export default App;

/*  
import img1 from './mov11.jpg';
import img2 from './mov14.jpg';
import img3 from './mov13.jpg';
import img4 from './mov12.jpg';
<img src={img1} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'60%',left:'10%'}}/>
<img src={img2} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'110%',left:'10%'}}/>
<img src={img3} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'160%',left:'10%'}}/>
<img src={img4} alt="" style={{ width:'160px',height: '250px',position: 'absolute',top:'210%',left:'10%'}}/>
*/