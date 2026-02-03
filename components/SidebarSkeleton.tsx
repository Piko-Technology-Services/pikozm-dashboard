"use client";

export default function SidebarSkeleton() {
  // Helper to render a menu skeleton item
  const SkeletonItem = ({ hasChildren }: { hasChildren?: boolean }) => (
    <li className="nav-item bg-dark mb-2">
      <div className="d-flex align-items-center gap-3 px-3 py-2">
        <div className="h-6 w-6 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 animate-pulse rounded"></div>
      </div>
      {hasChildren && (
        <ul className="nav flex-column ms-4 mt-1">
          {[1, 2, 3].map((i) => (
            <li key={i} className="nav-item mb-1">
              <div className="h-3 w-5/6 bg-gray-300 animate-pulse rounded ms-3"></div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <nav className="sidebar sidebar-offcanvas bg-dark" id="sidebar">
      <ul className="nav flex-column p-3">
        {/* Logo */}
        <li className="mb-4">
          <div className="h-10 w-32 bg-gray-300 animate-pulse rounded"></div>
        </li>

        {/* Main menu items */}
        <SkeletonItem />
        <SkeletonItem hasChildren />
        <SkeletonItem hasChildren />
        <SkeletonItem hasChildren />
      </ul>
    </nav>
  );
}
