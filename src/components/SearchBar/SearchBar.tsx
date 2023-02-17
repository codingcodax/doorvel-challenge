import type { SyntheticEvent } from 'react';
import { Autocomplete, TextField } from '@mui/material';

import { useIsMobileSize } from '~/hooks';

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
  const isMobileSize = useIsMobileSize();

  return (
    <Autocomplete
      disablePortal
      id='searchbar'
      inputValue={inputValue}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Child'
          margin={isMobileSize ? 'dense' : 'none'}
          placeholder='Alarma'
          variant='filled'
        />
      )}
      size='small'
      sx={{
        width: isMobileSize ? '100%' : 300,
        justifySelf: 'end',
        gridColumn: isMobileSize ? 'span 2' : '',
      }}
      value={value}
      onChange={onChange}
      onInputChange={onInputChange}
    />
  );
};

export default SearchBar;
