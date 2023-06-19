import Nav from "@/Components/Nav";
import "./globals.css";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="relative">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
