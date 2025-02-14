import { Route, Routes } from 'react-router-dom';
import Home from './assets/Containers/Home/Home.tsx';
import NavBar from './assets/components/NavBar/NavBar.tsx';
import { Container } from 'react-bootstrap';
import Page from './assets/components/Page/Page.tsx';
import Admin from './assets/Containers/Admin/Admin.tsx';

const App = () => {
  return (
    <>
      <header className="mb-5">
        <NavBar />
      </header>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Home />} />
          <Route path="/pages/page-edit" element={<Admin/>} />
          <Route path="/pages/:pageName" element={<Page />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
