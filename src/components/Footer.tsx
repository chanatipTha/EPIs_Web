export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold">
            MyBrand
          </a>
          <div className="flex flex-col">
            {/* Footer Links */}
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Support
                </a>
              </li>
            </ul>
            <div className="text-center text-sm py-1">
              📢 Contact: Line OA | Phone: 012-345-6789
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#">
              <svg
                className="w-6 h-6 text-white hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.5a9.75 9.75 0 01-2.83.78 4.88 4.88 0 002.13-2.69 9.66 9.66 0 01-3.07 1.18 4.85 4.85 0 00-8.29 4.42A13.75 13.75 0 011.64 3a4.84 4.84 0 001.5 6.47A4.84 4.84 0 01.96 8.8v.06a4.85 4.85 0 003.89 4.76 4.83 4.83 0 01-2.18.08 4.86 4.86 0 004.53 3.38A9.73 9.73 0 010 20.54a13.72 13.72 0 007.45 2.18c8.94 0 13.84-7.41 13.84-13.84l-.02-.63A9.83 9.83 0 0024 4.5z" />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 h-6 text-white hover:text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0a12 12 0 0112 12 12 12 0 01-12 12A12 12 0 010 12 12 12 0 0112 0zm0 2a10 10 0 00-7.07 2.93A10 10 0 002 12a10 10 0 002.93 7.07A10 10 0 0012 22a10 10 0 007.07-2.93A10 10 0 0022 12a10 10 0 00-2.93-7.07A10 10 0 0012 2zm-2 4v8l6-4-6-4z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="bg-gray-800 flex gap-3 justify-center items-center">
          <div className="text-center text-sm py-2">
            © 2025 เว็บไซต์นี้จัดทำขึ้้นโดยนิสิตสหกิจ. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
