import type { SyntheticEvent } from 'react';
import { Autocomplete, TextField } from '@mui/material';

import { useMediaQuery } from '~/hooks';

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
  const [, isTabletSize] = useMediaQuery();

  return (
    <Autocomplete
      blurOnSelect
      disablePortal
      id='searchbar'
      inputValue={inputValue}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Child'
          margin='none'
          placeholder='Alarma'
          variant='standard'
        />
      )}
      size='small'
      sx={{
        width: isTabletSize ? '100%' : 300,
        justifySelf: 'end',
        gridColumn: isTabletSize ? 'span 2' : '',
      }}
      value={value}
      onChange={onChange}
      onInputChange={onInputChange}
    />
  );
};

export default SearchBar;
