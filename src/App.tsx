import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rates from './pages/Rates';
import Safety from './pages/Safety';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/safety" element={<Safety />} />
      </Routes>
    </Layout>
  );
}
