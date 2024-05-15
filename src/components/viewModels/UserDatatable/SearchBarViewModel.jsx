import { useState, useEffect } from 'react';
import useData from '../../../hooks/useData';
import SearchBar from '../../views/UserDatatable/SearchBar';

function SearchBarViewModel() {
  const [searchQuery, setSearchQuery] = useState('');
  const { filteredUsersByTab, setListedUsers } = useData();

  useEffect(() => {
    if (searchQuery === '') {
      setListedUsers(filteredUsersByTab);
    } else {
      const searchedUsers = filteredUsersByTab.filter((user) => {
        return (
          user.id.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );
      });
      setListedUsers(searchedUsers);
    }
  }, [searchQuery, filteredUsersByTab, setListedUsers]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase().trim());
  };

  return <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />;
}
export default SearchBarViewModel;
