// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/style/style.css';
import EntryForm from './components/EntryForm';
import Tournament from './components/Tournament';
import Menu from './components/Menu';

function App() {
  // useEffect(() => {
  //   fetch('/api/hello') // Express APIエンドポイントを呼び出す
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setMessage(data.message))
  //     .catch((error) => console.error('Error:', error));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}/>
        <Route path="/tournament" element={<Tournament />}/>
        <Route path="/entry" element={<EntryForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
