import { Autocomplete, TextField } from '@mui/material';
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
  return (
    <Autocomplete
      disablePortal
      id='searchbar'
      inputValue={inputValue}
      options={options}
      renderInput={(params) => <TextField {...params} label='Child' />}
      sx={{ width: 300, justifySelf: 'end' }}
      value={value}
      onChange={onChange}
      onInputChange={onInputChange}
    />
  );
};

export default SearchBar;
