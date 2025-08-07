import React, { createContext, useState } from 'react';

// here authContext is share a login info across the component.
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null); //use for get token from localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);  //use for get user detail from localstorage

  // this one is login funciton which check a dummy credential and login a user
  const login = ({ username, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'password') {
          const fakeToken = 'mockjwttoken';
          const userInfo = { username };

          localStorage.setItem('token', fakeToken);
          localStorage.setItem('user', JSON.stringify(userInfo));
          setToken(fakeToken);
          setUser(userInfo);

          resolve({ success: true });
        } else {
          reject(new Error('Invalid credentials')); // if user dummy credentail is wrong then throw an error
        }
      }, 1000); //  here i set a dealy of an 1 sec
    });
  };

  // when user logout them self at that time i remove token and user details from a localstorage
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  //  i user this for  convert a token to boolean if token present then user is  isAuthenticated = true
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
