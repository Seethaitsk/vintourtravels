"use client";

import React, { createContext, useContext, useState } from "react";

interface EnquiryContextType {
  isOpen: boolean;
  itemTitle: string;
  itemCategory: string;
  openEnquiry: (title?: string, category?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemTitle, setItemTitle] = useState("");
  const [itemCategory, setItemCategory] = useState("General");

  const openEnquiry = (title: string = "General Booking / Enquiry", category: string = "General") => {
    setItemTitle(title);
    setItemCategory(category);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, itemTitle, itemCategory, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
};
