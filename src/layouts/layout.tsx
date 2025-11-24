import { Link, Outlet } from "react-router";

export function Layout() {
  return (
    <section>
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
          <h1 className="text-2xl font-bold text-sky-700">Task Management</h1>

          <ul className="inline-flex gap-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-sky-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-sky-600">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-12">
        <Outlet />
      </main>
    </section>
  );
}
