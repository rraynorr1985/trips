import './App.css';
import { useState } from 'react';
import NewOrderPage from './components/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './components/OrderHistoryPage/OrderHistoryPage';
import AuthPage from './components/AuthPage/AuthPage';
import NavBar from './components/NavBar';
import { Routes, Route  } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import Home from './components/Home';
import TripList from './components/TripList/TripList';
import NewTrip from './components/NewTrip/NewTrip';

function App() {
  // eslint-disable-next-line 
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ?
        <>         
           <NavBar setUser={setUser} user={user}  />
             <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="/trips" element={<TripList />} />
               <Route path="/newtrip" element={<NewTrip />} />
               {/* <Route path="/trips" element={<TripHistory setUser={setUser}/>} /> */}
             </Routes>     
       </>
      :
         <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
