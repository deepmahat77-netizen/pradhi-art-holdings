import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f8f7f4]">
      <SiteHeader />
      <main className="pt-[120px] px-8">
        <section className="max-w-5xl mx-auto text-center pb-24">
          <p className="text-sm text-gray-500 uppercase tracking-[0.4em] mb-6">Corporate collaborations</p>
          <h1 className="text-5xl md:text-6xl serif leading-tight mb-8">Bespoke collections for offices, hospitality & private clients</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Luxury art programs designed to elevate space, brand identity and investor confidence. Pradhi Art Holdings creates statement works that integrate seamlessly with refined interiors.
          </p>
        </section>

        <section className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-start max-w-6xl mx-auto pb-24">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl serif mb-4">Corporate commissions</h2>
              <p className="text-gray-400 leading-relaxed">
                Tailored large-format artworks, wall series and signature installations that speak to leadership, heritage and prestige. Ideal for boardrooms, luxury residences and five-star hospitality.
              </p>
            </div>

            <div>
              <h2 className="text-3xl serif mb-4">Investment-ready collections</h2>
              <p className="text-gray-400 leading-relaxed">
                Thoughtfully curated collections offer both visual impact and long-term value. We support corporate collectors with provenance, authentication and legacy presentation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl serif mb-4">Strategic placement</h2>
              <p className="text-gray-400 leading-relaxed">
                From lobby sequences to private boardroom pairings, our approach ensures artwork enhances architecture, strengthens brand presence and inspires trust.
              </p>
            </div>
          </div>

          <aside className="space-y-8 rounded-3xl border border-zinc-800 bg-black/50 p-10">
            <div>
              <h3 className="text-xl uppercase tracking-[0.35em] text-gray-500 mb-4">Corporate services</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Commissioned corporate artworks</li>
                <li>• Collection advisory</li>
                <li>• Installation and curation</li>
                <li>• Limited edition heritage pieces</li>
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">Why invest</p>
              <p className="leading-relaxed text-gray-400">
                Corporate art is a statement of culture, stability and refined taste. We help clients build collections that endure in both aesthetic and market value.
              </p>
            </div>
          </aside>
        </section>

        <section className="max-w-6xl mx-auto space-y-12 pb-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl overflow-hidden bg-black">
              <img src="/2.jpeg" alt="Corporate art 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden bg-black">
              <img src="/3.jpeg" alt="Corporate art 2" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden bg-black">
            <img src="/4.jpeg" alt="Corporate art 3" className="w-full h-full object-cover" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
