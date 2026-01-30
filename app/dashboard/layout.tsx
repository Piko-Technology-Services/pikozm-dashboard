import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Template CSS */}
      <link rel="stylesheet" href="/assets/vendors/mdi/css/materialdesignicons.min.css" />
      <link rel="stylesheet" href="/assets/vendors/flag-icon-css/css/flag-icon.min.css" />
      <link rel="stylesheet" href="/assets/vendors/css/vendor.bundle.base.css" />
      <link rel="stylesheet" href="/assets/vendors/font-awesome/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />

      <div className="container-scroller">
        <Navbar />

        <div className="container-fluid page-body-wrapper">
          <Sidebar />

          <div className="main-panel">
            <div className="content-wrapper">
              {children}
            </div>

            <Footer />
          </div>
        </div>
      </div>

      {/* Template JS */}
      <script src="/assets/vendors/js/vendor.bundle.base.js" />
      <script src="/assets/vendors/chart.js/Chart.min.js" />
      <script src="/assets/vendors/jquery-circle-progress/js/circle-progress.min.js" />
      <script src="/assets/js/off-canvas.js" />
      <script src="/assets/js/hoverable-collapse.js" />
      <script src="/assets/js/misc.js" />
      <script src="/assets/js/dashboard.js" />
    </>
  );
}
