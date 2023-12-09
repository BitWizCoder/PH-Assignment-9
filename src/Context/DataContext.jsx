/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext({});
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase_Config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json()) // Parse the response to JSON
      .then((data) => setJsonData(data)) // Set the parsed data in state
      .catch((error) => console.log(error));
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    // This callback is triggered when the authentication state changes
    const unsubscribe = getAuth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
        console.log("Current user:", authUser);
        setLoading(false);
      } else {
        // User is signed out
        setUser(null);
        console.log("User signed out");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const data = {
    user,
    createUser,
    signIn,
    googleSignIn,
    jsonData,
    logout,
    loading,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
