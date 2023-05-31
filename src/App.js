import "./App.css";
import { Link } from 'react-router-dom';
import RoutsAdd from './components/RoutsAdd';
import FooterTodo from './components/footer/FooterTodo';




function App() {


  
  return (
    <div className=''>
     <div>
    <div className='flex justify-between items-center px-20 bg-blue-600'>
    <div><h1 className="flex justify-center items-center mt-10 text-center font-bold mb-10 text-2xl text-white">
      <h1 className="hover:scale-125 transition-all">T</h1>
      <h1 className="hover:scale-125 transition-all">O</h1> 
      <h1 className="hover:scale-125 transition-all ml-2">D</h1>
      <h1 className="hover:scale-125 transition-all">O</h1> 
      <h1 className="hover:scale-125 transition-all ml-2">L</h1>
      <h1 className="hover:scale-125 transition-all">I</h1>
      <h1 className="hover:scale-125 transition-all">S</h1>
      <h1 className="hover:scale-125 transition-all">T</h1></h1></div>
    <div className='px-20 flex justify-between text-center gap-10 font-bold text-blue-800 py-2 '>
      <Link to="/" ><button className='bg-white px-5 py-2 border-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-indigo-900'>Header</button></Link>
      <Link to="/counter" ><button className='bg-white px-5 py-2 border-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-indigo-900'>Counter</button></Link>
      <Link to="/todolist" ><button className='bg-white px-5 py-2 border-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-indigo-900'>To Do List</button></Link>
      <Link to="/usercards" ><button className='bg-white px-5 py-2 border-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-indigo-900'>Cards</button></Link>
      {/* <Link to="" ><button className='bg-blue-200 px-5 py-2 border-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-indigo-900'>View</button></Link> */}
      </div>
      
      </div>
      
    <RoutsAdd/>
    </div>
    <FooterTodo/>
    </div>
  );
}

export default App;

