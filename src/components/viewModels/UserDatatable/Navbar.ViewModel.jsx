import { useState } from 'react';
import Navbar from '../../views/UserDatatable/Navbar';

function NavbarViewModel() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <Navbar value={value} handleChange={handleChange} />;
}

export default NavbarViewModel;
