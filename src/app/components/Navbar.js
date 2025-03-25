import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/image.png" alt="Logo" className="h-14" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-sm">
        <Link href="/team" className="hover:text-gray-300">Meet The Team</Link>
        <Link href="/price-list" className="hover:text-gray-300">Price List</Link>
        <Link href="/treatments" className="hover:text-gray-300">Treatments</Link>
        <Link href="/academy" className="hover:text-gray-300">Academy</Link>
        <Link href="/igloo" className="hover:text-gray-300">Igloo Experience</Link>
      </div>

      {/* Button */}
      <Link
        href="/book"
        className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
      >
        BOOK NOW
      </Link>
    </nav>
  );
}
