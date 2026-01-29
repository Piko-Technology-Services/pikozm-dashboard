import "@/public/assets/vendors/mdi/css/materialdesignicons.min.css";
import "@/public/assets/vendors/flag-icon-css/css/flag-icon.min.css";
import "@/public/assets/vendors/css/vendor.bundle.base.css";
import "@/public/assets/css/style.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth">
          {children}
        </div>
      </div>
    </div>
  );
}
