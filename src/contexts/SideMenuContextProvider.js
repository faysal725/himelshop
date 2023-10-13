import { createContext, useContext, useEffect, useState } from 'react';

export const SideMenuContext = createContext();

const SideMenuContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const { body } = document;
        if (toggle) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    }, [toggle]);

    return (
        <SideMenuContext.Provider value={{ toggle, setToggle }}>
            {children}
        </SideMenuContext.Provider>
    );
};

export const useSizeMenuContext = () => useContext(SideMenuContext);

export default SideMenuContextProvider;
