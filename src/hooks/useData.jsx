import { useContext } from 'react';
import { UsersContext } from '../components/viewModels/InterfaceViewModel';

export const useData = () => useContext(UsersContext);
