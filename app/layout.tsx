import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Circle Eleven Manufacturing",
  description: "Polish and Ukrainian owned precision machining company based in St. Charles, Illinois.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
