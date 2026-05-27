import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
        <Link href="/" className="text-4xl tracking-[6px] serif">
          PRADHI
        </Link>
        <nav className="flex gap-10 text-sm tracking-widest">
          <Link href="/" className="hover:text-[#c5a059]">HOME</Link>
          <Link href="/artist" className="hover:text-[#c5a059]">THE ARTIST</Link>
          <Link href="/corporate" className="hover:text-[#c5a059]">CORPORATE</Link>
          <Link href="/contact" className="hover:text-[#c5a059]">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
