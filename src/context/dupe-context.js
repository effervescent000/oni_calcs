import React, { createContext } from "react";

const DupeContext = createContext({
    dupeModalIsOpen: false,
    toggleDupeModal: () => {},
    dupeToEdit: {},
    setDupeToEdit: () => {},
    getDupes: () => {},
});

export default DupeContext;
