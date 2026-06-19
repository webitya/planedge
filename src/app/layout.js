import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";

export const metadata = {
  title: "Planedge Architect",
  description: "Innovative Architecture with an Indian Soul, based in Ranchi, Jharkhand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
