import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import HomeComponent from './Component/HomeComponent';
import AboutComponent from './Component/AboutComponent';
import FacilityComponent from './Component/FacilityComponent';
import MenuComponent from './Component/MenuComponent';
import GalleryComponent from './Component/GalleryComponent';
import TeamComponent from './Component/OurTeamComponent';
import ContactComponent from './Component/ContactComponent';
import FooterComponent from './Component/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomeComponent />
      <AboutComponent />
      <FacilityComponent />
      <MenuComponent />
      <GalleryComponent />
      <TeamComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
