import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

// function App() {
//   return (
//     <div className="app-container">
//       <header className="app-header">
//         Plan 2 Go
//       </header>
//       <div className="app-content">
//         {/* <div className="content-pane">
//           <p>This is the content pane.</p>
//         </div> */}
//         <div className="map-pane">
//           <Map />
//         </div>
//       </div>
//       <footer className="app-footer">
//         <p>&copy; 2023 Plan2Go. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
    </div>

  );
}

export default App;
