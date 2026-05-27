import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f8f7f4]">
      <SiteHeader />
      <main className="pt-[120px] px-8">
        <section className="max-w-5xl mx-auto text-center pb-24">
          <p className="text-sm text-gray-500 uppercase tracking-[0.4em] mb-6">Contact</p>
          <h1 className="text-5xl md:text-6xl serif leading-tight mb-8">Connect with Pradhi Art Holdings</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            For commissions, corporate art advisory, gallery enquiries or collection consultations, please reach out directly. We offer dedicated support for clients worldwide.
          </p>
        </section>

        <section className="max-w-4xl mx-auto grid gap-16 lg:grid-cols-2 pb-24">
          <div className="rounded-[32px] border border-zinc-800 bg-black/60 p-10 space-y-8">
            <div>
              <h2 className="text-3xl serif mb-4">Studio contact</h2>
              <p className="text-gray-400 leading-relaxed">
                Pradhi Art Holdings
                <br />Kathmandu, Nepal
                <br />By appointment only
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">Email</p>
              <p className="text-gray-400">hello@pradhiartholdings.com</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">Phone</p>
              <p className="text-gray-400">+977 1 555 0123</p>
            </div>
          </div>

          <div className="rounded-[32px] border border-zinc-800 bg-black/60 p-10">
            <form className="space-y-6">
              <label className="block text-sm text-gray-400">
                Name
                <input type="text" className="mt-3 w-full rounded-3xl border border-zinc-800 bg-[#111] px-4 py-4 text-white outline-none focus:border-[#c5a059]" placeholder="Your name" />
              </label>
              <label className="block text-sm text-gray-400">
                Email
                <input type="email" className="mt-3 w-full rounded-3xl border border-zinc-800 bg-[#111] px-4 py-4 text-white outline-none focus:border-[#c5a059]" placeholder="Your email" />
              </label>
              <label className="block text-sm text-gray-400">
                Message
                <textarea rows={6} className="mt-3 w-full rounded-3xl border border-zinc-800 bg-[#111] px-4 py-4 text-white outline-none focus:border-[#c5a059]" placeholder="Tell us about your project" />
              </label>
              <button type="submit" className="w-full rounded-3xl bg-[#c5a059] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black hover:bg-[#e1c17d] transition">
                Send enquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
