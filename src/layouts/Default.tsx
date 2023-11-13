import CurrentlyLooking from "@components/CurrentlyLooking/CurrentlyLooking";
import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import { ReactNode } from "react";
import "@styles/scrollbar.css";

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <main className="flex flex-col justify-between scrollbar pt-10">
      <CurrentlyLooking />
      <Navbar />
      <div className="h-auto px-40">{children}</div>
      <Footer />
    </main>
  );
};
