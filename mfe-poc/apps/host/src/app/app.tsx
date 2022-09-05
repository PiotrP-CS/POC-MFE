import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Driver = React.lazy(() => import('driver/Module'));

const Vehicle = React.lazy(() => import('vehicle/Module'));

const Shift = React.lazy(() => import('shift/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/driver">Driver</Link>
        </li>

        <li>
          <Link to="/vehicle">Vehicle</Link>
        </li>

        <li>
          <Link to="/shift">Shift</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>WE ARE IN THE SHELL APP, ARE WEdsdssd?</div>} />

        <Route path="/driver" element={<Driver />} />

        <Route path="/vehicle" element={<Vehicle />} />

        <Route path="/shift" element={<Shift />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
