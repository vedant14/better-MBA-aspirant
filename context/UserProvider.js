import React, { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [authenticatedState, setAuthenticatedState] = useState(
    "not-authenticated"
  );

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === "SIGNED_IN") {
          setAuthenticatedState("authenticated");
          router.push("/profile");
        }
        if (event === "SIGNED_OUT") {
          setAuthenticatedState("not-authenticated");
        }
      }
    );
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  useEffect(() => {
    checkUser();
  }, [authenticatedState]);

  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setProfile(user);
    }
    console.log("Fetching the user");
  }
  async function handleAuthChange(event, session) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }
  return (
    <UserContext.Provider value={[profile, setProfile]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
