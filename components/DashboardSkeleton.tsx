"use client";

export default function DashboardSkeleton() {
  return (
    <div className="p-4">
      {/* Header Skeleton */}
      <div className="mb-4">
        <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded mb-2"></div>
        <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
      </div>

      {/* Stats Skeleton */}
      <div className="row g-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="col-xl-4 col-md-6">
            <div className="card shadow-sm border-0 h-100 p-4">
              <div className="d-flex align-items-center">
                <div className="rounded-full w-16 h-16 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                <div className="ms-4 flex-grow-1">
                  <div className="h-4 w-3/4 mb-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
                  <div className="h-8 w-1/2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Skeleton */}
      <div className="row mt-5">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <div className="h-5 w-1/4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded mb-3"></div>
              <ul className="list-group list-group-flush">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="list-group-item px-0">
                    <div className="d-flex align-items-start">
                      <div className="flex-grow-1">
                        <div className="h-4 w-3/4 mb-2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
                        <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
                      </div>
                      <div className="h-6 w-20 ms-3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions Skeleton */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <div className="h-5 w-1/3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded mb-3"></div>
              <div className="d-grid gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
