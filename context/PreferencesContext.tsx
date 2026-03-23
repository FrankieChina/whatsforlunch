import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type PreferencesContextType = {
  dietaryRestrictions: string[];
  toggleRestriction: (restriction: string) => void;
};

export const PreferencesContext = createContext<PreferencesContextType>({
  dietaryRestrictions: [],
  toggleRestriction: () => {},
});

export const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [restrictions, setRestrictions] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('dietaryRestrictions').then(saved => {
      if (saved) {
        try {
          setRestrictions(JSON.parse(saved));
        } catch(e) {}
      }
    });
  }, []);

  const toggleRestriction = (res: string) => {
    setRestrictions(prev => {
      const newRes = prev.includes(res) ? prev.filter(r => r !== res) : [...prev, res];
      AsyncStorage.setItem('dietaryRestrictions', JSON.stringify(newRes));
      return newRes;
    });
  };

  return (
    <PreferencesContext.Provider value={{ dietaryRestrictions: restrictions, toggleRestriction }}>
      {children}
    </PreferencesContext.Provider>
  );
};
