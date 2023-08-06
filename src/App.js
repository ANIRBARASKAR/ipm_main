import { BrowserRouter , Route , Routes} from 'react-router-dom';

import Platinum from './components/Platinum';
import BookingForm from './components/BookingForm';
import Icons from './components/Icons';
import Testimonials from './components/Testimonials';
import Mentors from './components/Mentors';
// import './App.css'
import Header from './Home/Header';
import Footer from './Home/Footer'

const App = () => { 
  return (
    <BrowserRouter>
    <Header/>
    <Platinum/>
    <BookingForm/>
    <Icons/>
    <Mentors/>
    <Testimonials/>
    

      {/* <Routes>
         <Route path='/' element={<Platinum/>}/>
         <Route path='/booking' element={<BookingForm/>}/>
         <Route path='/icons' element={<Icons/>}/>
         <Route path='/testimonial' element={<Testimonials/>}/>
         <Route path='/mentors' element={<Mentors/>}/>
      </Routes> */}
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
{/* <Header/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/page" element={<Page/>} />
<Route path="/login" element={<Login />} />
<Route path="/about" element={<About />} />
<Route path="/team" element={<Team />} />
<Route path="/register" element={<Register />} />
<Route path="/Logout " element={<Logout  />} />
</Routes>
<Footer/> */}