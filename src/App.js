import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  
    <div className="App d-flex flex-column vh-100"> 
    <MyNavbar />
    <main className='flex-grow-1'></main>
    <MyFooter/>
    </div>
  );
}

export default App;
