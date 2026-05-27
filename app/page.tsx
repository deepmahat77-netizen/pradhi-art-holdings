export default function Home() {
  const collections = [
    {
      id: 1,
      title: "Himalayan Spirit",
      image: "/1.jpeg",
      description: "The eternal dialogue between earth and sky",
    },
    {
      id: 2,
      title: "Sacred Light",
      image: "/2.jpeg",
      description: "Inner illumination through color and form",
    },
    {
      id: 3,
      title: "Heritage Echoes",
      image: "/3.jpeg",
      description: "Ancient soul in contemporary expression",
    },
    {
      id: 4,
      title: "Mountain Within",
      image: "/4.jpeg",
      description: "The inner landscape of being",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest">PRADHI</div>
          <nav className="flex gap-8 text-sm tracking-wide">
            <a href="#collections" className="hover:text-yellow-600 transition">Collections</a>
            <a href="#artist" className="hover:text-yellow-600 transition">Artist</a>
            <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center px-6 pt-20">
        <div>
          <h1 className="text-6xl md:text-7xl font-serif mb-6 leading-tight tracking-tight">
            Where the Himalayas<br />Meet Eternity
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Contemporary Art by Pradhi RL Rana
          </p>
          <p className="text-sm text-zinc-500 tracking-wider">SCROLL TO EXPLORE</p>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif text-center mb-4">Collections</h2>
          <p className="text-zinc-400 text-center mb-16">Discover our curated selection</p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-zinc-900 aspect-square mb-6">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">{collection.title}</h3>
                <p className="text-zinc-400 text-sm">{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6 text-center text-zinc-500 text-sm">
        <p>© 2026 Pradhi Art Holdings. All rights reserved.</p>
      </footer>
    </div>
  );
}
