import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-semibold text-gray-800">SmartUge</a>
        </Link>
        <div className="space-x-4">
          <Link href="#meals"><a className="text-gray-600 hover:text-gray-800">Ugeplan</a></Link>
          <Link href="#activities"><a className="text-gray-600 hover:text-gray-800">Aktiviteter</a></Link>
          <Link href="#kontakt"><a className="text-gray-600 hover:text-gray-800">Kontakt</a></Link>
        </div>
      </div>
    </nav>
);
}