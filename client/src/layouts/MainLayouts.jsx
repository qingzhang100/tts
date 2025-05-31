// layouts/MainLayout.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children, fontSize }) {
  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
