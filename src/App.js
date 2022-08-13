import 'normalize.css';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Swiper from './components/Swiper/SwiperAuto';

const App = () => {
  return (
    <>
     <Header />
     <Swiper />
     <Background />
    </>
  );
}

export default App;
