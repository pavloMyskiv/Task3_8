import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { routing } from './routing/routing';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleUser,
  faLocationDot,
  faSquarePhone,
  faGlobe,
  faBuilding,
  faRightToBracket,
  faRightFromBracket,
  faPlus,
  faSignature,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope,
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';

const App = () => (
  <div className="App">
    {' '}
    <RouterProvider router={routing} />
  </div>
);

export default App;

library.add(
  faEnvelope,
  faCircleUser,
  faLocationDot,
  faSquarePhone,
  faGlobe,
  faBuilding,
  faRightToBracket,
  faRightFromBracket,
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
  faPlus,
  faSignature
);
