import { ReactNode } from "react";
import AppHeader from "@/components/molecules/AppHeader";
import Footer from "@/components/molecules/Footer";
import { useSelector } from "react-redux";
import { selectFooterData } from "@/store/appSlice";

export default function Layout({ children }: { children: ReactNode }) {
  const footerData = useSelector(selectFooterData);
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <Footer footerData={footerData} />
    </>
  );
}
