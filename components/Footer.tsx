export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner-wraper">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted">
            © {new Date().getFullYear()} Piko Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
