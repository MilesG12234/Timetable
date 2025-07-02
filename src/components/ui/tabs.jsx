import React, { createContext, useContext } from "react";

// Create shared context
const TabsContext = createContext();

// Tabs wrapper that holds selected state
export function Tabs({ value, onValueChange, children, className = "" }) {
  return (
    <TabsContext.Provider value={{ selected: value, onChange: onValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

// Container for the tab buttons
export function TabsList({ children, className = "" }) {
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {children}
    </div>
  );
}

// Each clickable tab
export function TabsTrigger({ value, children, className = "" }) {
  const { selected, onChange } = useContext(TabsContext);
  const isActive = selected === value;
  const isGreen = ["Day 2", "Day 5", "Day 7", "Day 9"].includes(value);

  return (
    <button
      onClick={() => onChange?.(value)} // prevents crash if onChange is undefined
      className={`px-4 py-2 rounded transition font-medium capitalize ${
        isActive
          ? "bg-blue-600 text-white"
          : isGreen
          ? "bg-green-100 text-green-900"
          : "bg-gray-100 text-black hover:bg-gray-200"
      } ${className}`}
    >
      {children}
    </button>
  );
}

// Tab panel content, only shown if active
export function TabsContent({ value, children, className = "" }) {
  const { selected } = useContext(TabsContext);
  if (value !== selected) return null;

  const isGreen = ["Day 2", "Day 5", "Day 7", "Day 9"].includes(value);

  return (
    <div className={`${className} ${isGreen ? "bg-green-50 p-4 rounded-md" : ""}`}>
      {children}
    </div>
  );
}
