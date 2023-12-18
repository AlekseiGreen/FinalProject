import { Routes, Route } from 'react-router-dom';
import Core from './Core.jsx';
import Account from './Account.jsx';
import Search from './Search.jsx';
import Result from './Result.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Core />}/>
        <Route path="/Core" element={<Core />}/>
        <Route path="/Account" element={<Account />}/>
        <Route path="/Search" element={<Search />}/>
        <Route path="/Result" element={<Result />}/>
      </Routes>
    </>
  );
};

export default App;
