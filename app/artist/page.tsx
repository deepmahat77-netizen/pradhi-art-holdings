import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export default function ArtistPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f8f7f4]">
      <SiteHeader />
      <main className="pt-[120px] px-8">
        <section className="max-w-5xl mx-auto text-center pb-24">
          <p className="text-sm text-gray-500 uppercase tracking-[0.4em] mb-6">The artist</p>
          <h1 className="text-5xl md:text-6xl serif leading-tight mb-8">Pradhi RL Rana</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A visionary Nepali artist translating Himalayan heritage into luminous contemporary canvases. Each composition balances tradition, texture and investment-worthy calm.
          </p>
        </section>

        <section className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-start max-w-6xl mx-auto pb-24">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl serif mb-4">Signature Expression</h2>
              <p className="text-gray-400 leading-relaxed">
                Pradhi blends layered pigment, evocative mountain light, and minimalist gestures to create work that feels both timeless and immediate. His portfolio is defined by the quiet power of ritual, landscape and cultural memory.
              </p>
            </div>

            <div>
              <h2 className="text-3xl serif mb-4">Practice & Process</h2>
              <p className="text-gray-400 leading-relaxed">
                Every painting begins with a meditation on place, then evolves through texture-rich washes, gold accents and disciplined composition. The result is a refined body of work made to live in private residences, corporate lobbies and curated collections.
              </p>
            </div>

            <div>
              <h2 className="text-3xl serif mb-4">Legacy</h2>
              <p className="text-gray-400 leading-relaxed">
                As a custodian of Himalayan culture, Pradhi’s art invites collectors to own a piece of Nepali contemporary heritage — made with depth, intention and enduring craftsmanship.
              </p>
            </div>
          </div>

          <aside className="space-y-8 rounded-3xl border border-zinc-800 bg-black/50 p-10">
            <div>
              <h3 className="text-xl uppercase tracking-[0.35em] text-gray-500 mb-4">Highlights</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Signature Himalayan abstractions</li>
                <li>• Bespoke private commissions</li>
                <li>• Curated corporate collections</li>
                <li>• Gallery exhibitions and legacy works</li>
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">Studio</p>
              <p className="leading-relaxed text-gray-400">
                Based in Kathmandu, Pradhi’s studio combines contemporary installation with traditional Nepali techniques, delivering works that resonate across interior and hospitality projects.
              </p>
            </div>
          </aside>
        </section>

        <section className="max-w-6xl mx-auto space-y-12 pb-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl overflow-hidden bg-black">
              <img src="/1.jpeg" alt="Artist work 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden bg-black">
              <img src="/2.jpeg" alt="Artist work 2" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl overflow-hidden bg-black">
              <img src="/3.jpeg" alt="Artist work 3" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden bg-black">
              <img src="/4.jpeg" alt="Artist work 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
