import React from 'react'

const SearchInput = ({searchQuery, setSearchQuery}) => {

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <input type="text" className="search-input" placeholder="Search..." value={searchQuery || ''} onChange={handleSearch} autoFocus />
  )
}

export default SearchInput