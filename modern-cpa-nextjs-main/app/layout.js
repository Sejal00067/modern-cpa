import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';  // Global CSS import

export default function Layout({ children }) {
  return (
    <>
      {/* The root HTML and Body tags */}
      <html lang="en">
        <body className="bg-gray-50 font-sans">
          <Header />
          <main className="max-w-screen-xl mx-auto px-6 py-12 text-gray-800">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
