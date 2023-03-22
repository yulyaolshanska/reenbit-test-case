import React from "react";
import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../../firebase/firebase";

const Login: React.FC = () => {
  return (
    <div>
      <GoogleButton onClick={signInWithGoogle}>
        Sign in with google
      </GoogleButton>
    </div>
  );
};

export default Login;
