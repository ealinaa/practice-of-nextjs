"use client";

import { MyUserContextProvider } from "@/hooks/useUser";



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