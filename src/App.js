
import './index.css';
import { Navbar }   from './Components/navbar';
import { Hero }     from './Components/hero';
import { About }    from './Components/about';
import { Services } from './Components/services';
import { Tours }    from './Components/tours';
import Footer       from './Components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer/>
    </>
  );
}

export default App;

