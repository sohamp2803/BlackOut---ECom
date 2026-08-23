import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("blakout_current_user");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, []);

  const signup = (userData) => {
    const existingUsers = JSON.parse(
      localStorage.getItem("blakout_users") || "[]",
    );

    const userExists = existingUsers.some(
      (u) => u.email.toLowerCase() === userData.email.toLowerCase(),
    );
    if (userExists) {
      throw new Error("This email is already registered!");
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    existingUsers.push(newUser);
    localStorage.setItem("blakout_users", JSON.stringify(existingUsers));

    localStorage.setItem("blakout_current_user", JSON.stringify(newUser));
    setCurrentUser(newUser);
    return newUser;
  };

  const login = ({ email, password }) => {
    const existingUsers = JSON.parse(
      localStorage.getItem("blakout_users") || "[]",
    );

    const validUser = existingUsers.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );

    if (!validUser) {
      throw new Error("Invalid email or password!");
    }

    localStorage.setItem("blakout_current_user", JSON.stringify(validUser));
    setCurrentUser(validUser);
    return validUser;
  };

  const logout = () => {
    localStorage.removeItem("blakout_current_user");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// AuthProvider and the hook are intentionally colocated so consumers share
// the same context instance.
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
