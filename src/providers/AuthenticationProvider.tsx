import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { ReactNode } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

interface Props {
  children: ReactNode;
}

const AuthencticationContextProvider = ({ children }: Props) => {
  const firebaseConfig = {
    apiKey: "AIzaSyB1pf18XNyUjt76Z5QW2qfECVcK-m0b0QE",
    authDomain: "clone-6d870.firebaseapp.com",
    projectId: "clone-6d870",
    storageBucket: "clone-6d870.appspot.com",
    messagingSenderId: "976486026550",
    appId: "1:976486026550:web:758435c6697675de2fb797",
    measurementId: "G-XW37ZW1G2P",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore(app);
  const auth = getAuth(app);

  return (
    <AuthenticationContext.Provider value={{ firebaseConfig, auth, db }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthencticationContextProvider;
