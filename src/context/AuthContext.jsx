import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Page refresh hone par user restore karein
    const loggedInUser = localStorage.getItem("blakout_current_user");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, []);

  // Signup Logic
  const signup = (userData) => {
    const existingUsers = JSON.parse(
      localStorage.getItem("blakout_users") || "[]",
    );

    // Check if email already exists
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

    // Auto-login after signup
    localStorage.setItem("blakout_current_user", JSON.stringify(newUser));
    setCurrentUser(newUser);
    return newUser;
  };

  // Login Logic
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

  // Logout Logic
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

// This module intentionally exports both the provider and its context hook.
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
