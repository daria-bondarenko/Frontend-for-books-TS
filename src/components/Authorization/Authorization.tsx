import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

interface AuthorizationProps {
  
}



export const Authorization = (props: AuthorizationProps): JSX.Element => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  interface EventHandlerProps {
    onChange: (e: React.KeyboardEvent) => void
  }

  const EventHandler = ({ onChange }: EventHandlerProps) => {
    (e: React.KeyboardEvent) => setLogin(e.target.value)
  }



  return (
    <div>
      <input type="text" value={login} onChange={}/>
      <input type="text" value={password} onChange={(e: React.KeyboardEvent)=>setPassword(e.target.value)}/>
      <Button variant="contained" color="primary">
       Sign in
      </Button>
      <Button variant="contained" color="primary">
        Registration
      </Button>
    </div>
  );
};