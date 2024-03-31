import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { createContext } from "react";

interface AuthenticationContextType {
  firebaseConfig: object;
  auth: Auth;
  db: Firestore
}



export  const AuthenticationContext = createContext<AuthenticationContextType>(
  {} as AuthenticationContextType
);
