
import { title } from "process";
import "./globals.css";
import { Figtree } from 'next/font/google'
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SuperbaseProvider";
import UserProvider from "@/hooks/userProvider";
import ModalProvider from "@/hooks/ModalProvider";
import ToasterProvider from "@/hooks/ToasterProvider";

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: " Listen to music !! ",
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
          <Sidebar>
            {children}
          </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
