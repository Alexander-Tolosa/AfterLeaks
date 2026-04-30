import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check local storage for mock session
    const storedUser = localStorage.getItem('afterleaks_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username) => {
    const mockUser = { username, role: 'user' };
    setUser(mockUser);
    localStorage.setItem('afterleaks_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('afterleaks_user');
  };

  return { user, login, logout, isAuthenticated: !!user };
};
