import About from './components/about/About';
import Campus from './components/campus/Campus';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Programs from './components/programs/Programs';
import Testimonials from './components/testimonials/Testimonials';
import Title from './components/Title';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle={'What we Offer'} title={'Our Program'} />
      <Programs />
      <About />
      <Title title={'Gallery'} subTitle={'Campus Photos'} />
      <Campus />
      <Title title={'Testimonials'} subTitle={'What Student Says'} />
      <Testimonials />
      <Title title={'Contact Us'} subTitle={'Get In Touch'} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
