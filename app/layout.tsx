// import './globals.css';
import "@/public/assets/vendors/mdi/css/materialdesignicons.min.css";
import "@/public/assets/vendors/flag-icon-css/css/flag-icon.min.css";
import "@/public/assets/vendors/css/vendor.bundle.base.css";
import "@/public/assets/css/style.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
