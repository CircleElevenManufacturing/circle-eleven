import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Circle Eleven Manufacturing",
  description: "Ukrainian and Polish owned manufacturing",
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
