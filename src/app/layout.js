import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import "./globals.css";

export const metadata = {
  title: "Planedge Architect",
  description: "Innovative Architecture with an Indian Soul, based in Ranchi, Jharkhand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <SplashScreen />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
