import React, { useState } from 'react';
import RouterComponent from 'components/Router';
import { authService } from 'fbase';

function AppComponent() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(authService.currentUser);
  
  return (
    <>
      <RouterComponent isLoggedIn={isLoggedIn}/>
      <footer>
        &copy; { new Date().getFullYear() } JTwitter
      </footer>
    </>
  );
}

export default AppComponent;