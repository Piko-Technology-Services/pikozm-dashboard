// app/dashboard/layout.tsx
import '../../public/assets/vendors/mdi/css/materialdesignicons.min.css';
import '../../public/assets/vendors/flag-icon-css/css/flag-icon.min.css';
import '../../public/assets/vendors/css/vendor.bundle.base.css';
import '../../public/assets/vendors/font-awesome/css/font-awesome.min.css';
import '../../public/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css';
import '../../public/assets/css/style.css';

import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
     <>
      <div className="container-scroller m-0">
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
      <Script src="/assets/vendors/js/vendor.bundle.base.js" strategy="beforeInteractive" />
      <Script src="/assets/vendors/chart.js/Chart.min.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/jquery-circle-progress/js/circle-progress.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/off-canvas.js" strategy="lazyOnload" />
      <Script src="/assets/js/hoverable-collapse.js" strategy="lazyOnload" />
      <Script src="/assets/js/misc.js" strategy="lazyOnload" />
      <Script src="/assets/js/dashboard.js" strategy="lazyOnload" />
    </>
  );
}
