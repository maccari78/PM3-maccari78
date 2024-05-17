import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Appointments from './views/Appointments/Appointments';
import CreateAppointmentForm from './views/Appointments/CreateAppointmentForm';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.actualUser.userData);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/appointments"
          element={<Appointments />}
        />
        {user ? (
          <Route path="/create-appointment" element={<CreateAppointmentForm user={user} />}
          />
        ) : (
          <Route path="/create-appointment" element={<p>Debes iniciar sesión para crear un turno.</p>} />
        )}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

