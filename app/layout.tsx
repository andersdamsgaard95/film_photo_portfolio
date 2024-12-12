import "./styles/globals.scss";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>

    </html>
  );
}
