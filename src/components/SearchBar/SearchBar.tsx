import { Autocomplete, TextField, useMediaQuery } from '@mui/material';
import type { SyntheticEvent } from 'react';

type Props = {
  inputValue: string;
  value: string | null;
  onChange: (
    _: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => void;
  onInputChange: (
    _: SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => void;
  options: string[];
};

const SearchBar = ({
  inputValue,
  value,
  onChange,
  onInputChange,
  options,
}: Props) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Autocomplete
      disablePortal
      id='searchbar'
      inputValue={inputValue}
      options={options}
      renderInput={(params) => <TextField {...params} label='Child' />}
      sx={{
        width: matches ? '100%' : 300,
        justifySelf: 'end',
        gridColumn: matches ? 'span 2' : '',
      }}
      value={value}
      onChange={onChange}
      onInputChange={onInputChange}
    />
  );
};

export default SearchBar;
