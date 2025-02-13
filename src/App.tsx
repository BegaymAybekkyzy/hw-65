import { Route, Routes } from 'react-router-dom';
import Home from './assets/Containers/Home/Home.tsx';
import About from './assets/Containers/About/About.tsx';
import NavBar from './assets/components/NavBar/NavBar.tsx';
import { Container } from 'react-bootstrap';
import MainPageBlock from './assets/components/MainPageBlock/MainPageBlock.tsx';

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pages" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/pages/:pageName" element={<MainPageBlock />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
