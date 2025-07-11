// src/components/ui/card.jsx

import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
