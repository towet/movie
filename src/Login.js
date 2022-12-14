import { auth, firebaseRef } from "../config";

const Login = () => (
  <div className="login">
    <button
      onClick={() => {
        auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());
      }}
    >
      join with Google
    </button>
  </div>
);

export default Login;
