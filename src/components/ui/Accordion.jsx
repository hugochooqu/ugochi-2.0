
import React, { useState, useContext, createContext } from "react";

const AccordionContext = createContext(null);

export function Accordion({ children }) {
  const [activeId, setActiveId] = useState("one");

  return (
    <AccordionContext.Provider value={{ activeId, setActiveId }}>
      <div className="w-full space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, value }) {
  return (
    <div className=" border-b-1 overflow-hidden" data-id={value}>
      {children}
    </div>
  );
}

export function AccordionTrigger({ children, value }) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionTrigger must be used inside Accordion");

  const { activeId, setActiveId } = ctx;

  const handleClick = () => {
    if (activeId !== value) {
      setActiveId(value); // open new one, never close same one
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-left px-4 py-3  font-normal text-lg"
    >
      {children}
    </button>
  );
}

export function AccordionContent({ children, value }) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionContent must be used inside Accordion");

  const isOpen = ctx.activeId === value;

  return (
    <div
      className={`transition-all duration-300 ease-in-out px-4 overflow-hidden rounded-3xl ${
        isOpen ? "max-h-70 py-3" : "max-h-0 py-0"
      }`}
    >
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
