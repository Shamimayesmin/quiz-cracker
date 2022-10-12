import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <ToastContainer position='top-center'></ToastContainer>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
