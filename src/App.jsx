import { Routes, Route } from 'react-router-dom';
import Core from './Core.jsx';
import Account from './Account.jsx';
import Search from './Search.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Core />}/>
        <Route path="/Core" element={<Core />}/>
        <Route path="/Account" element={<Account />}/>
        <Route path="/Search" element={<Search />}/>
        {/* <Route path="*" element={<Notfoundpage />}/> */}
      </Routes>
    </>
  );
};

export default App;
