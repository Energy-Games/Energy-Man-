import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from './components/gamePage.tsx';

function App() {
  return(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<App />);

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from './Pages/LoginPage';
// import MenuPage from './Pages/MenuPage';
// import NewGame from './Pages/NewGame';
// import TeamStats from './Pages/TeamStats';
// import ManageTeam from './Pages/ManageTeam';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/menu/:teamName" element={<MenuPage />} />
//         <Route path="/new-game/:teamName" element={<NewGame />} />
//         <Route path="/team-stats/:teamName" element={<TeamStats />} />
//         <Route path="/manage-team/:teamName" element={<ManageTeam />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
