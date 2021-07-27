// @flow 
import * as React from 'react';
import { useState } from "react";
import Button from "@material-ui/core/Button";

type RegistrationProps = {
  
};
export const Registration = (props: RegistrationProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <div>
      <input type="text" value={login} onChange={(e)=>setLogin(e.target.value)}/>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <input type="text" value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)}/>
      <Button variant="contained" color="primary">
        Log in
      </Button>
      <Button variant="contained" color="primary">
        Log in
      </Button>
    </div>
  );
};