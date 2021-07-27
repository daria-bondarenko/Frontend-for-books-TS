import React from 'react';
import Button from '@material-ui/core/Button';

interface HeaderProps { // или type

}

export const Header = (props: HeaderProps): JSX.Element => { //или Header: FC<Props>
  return (
    <div>
      <h2>ADD BOOK</h2>
      <Button variant="contained" color="primary">
       +
      </Button>
    </div>
  );
};