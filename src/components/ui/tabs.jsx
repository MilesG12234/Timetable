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
    console.log("trigger value:", value);

  const isGreen = ["Day 2", "Day 5", "Day 7", "Day 9"].includes(value); 
  const { selected, onChange } = useContext(TabsContext);
  const isActive = selected === value;
 

  return (
    <button
  onClick={() => onChange?.(value)}
  style={{
    padding: "8px 16px",
    borderRadius: "6px",
    margin: "4px",
    fontWeight: "bold",
    backgroundColor: isActive
      ? "#2563eb" // blue
      : isGreen
      ? "#bbf7d0" // light green
      : "#111", // dark gray
    color: isActive
      ? "white"
      : isGreen
      ? "#065f46" // dark green text
      : "white",
    cursor: "pointer",
    border: isActive ? "2px solid white" : "none",
  }}
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
