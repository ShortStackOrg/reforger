"use client";

import React, { createContext, useContext, useState } from 'react';

type ViewModeContextType = {
  viewMode: boolean;
  setViewMode: (viewMode: boolean) => void;
};

const ViewModeContext = createContext<ViewModeContextType>({
  viewMode: false,
  setViewMode: () => {},
});

export const ViewModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [viewMode, setViewMode] = useState(false);

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => useContext(ViewModeContext);
