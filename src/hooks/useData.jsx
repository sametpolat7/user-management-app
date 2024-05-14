import { useContext } from 'react';
import UsersContext from '../context/UsersContext';

const useData = () => useContext(UsersContext);

export default useData;
