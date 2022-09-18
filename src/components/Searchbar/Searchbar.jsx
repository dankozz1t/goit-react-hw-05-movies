import React from 'react';
import { useSearchParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styles';

const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';

  const handleInputChange = e => {
    const name = e.target.value;

    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <SearchForm onSubmit={handleFormSubmit}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>

      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleInputChange}
      />
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
