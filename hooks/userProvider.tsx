"use client";

import { MyUserContextProvider } from "./useUser";

interface UserrProviderProps {
    children: React.ReactNode;
}
const UserProvider : React.FC <UserrProviderProps> = ({
    children
}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
};
export default UserProvider