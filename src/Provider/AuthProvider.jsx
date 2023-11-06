import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   create user
   const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

// signIn user

const signIn = (email,password) =>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}
// logout
const logOut = () =>{
  setLoading(true)
 return signOut(auth)
}


  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        console.log('current user' ,currentUser);
        setLoading(false)
    })
    return() =>{
        return unsubscribe();
    }
  },[])

  const authInfo =  {
    user, loading, createUser,signIn,logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
