import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function AboutUs(){
    return(
        <div>
            <Navbar/>
         <section className="w-full">

      {/* ===== INTRO (DARK, LOGO BACKGROUND) ===== */}
      <div className="relative min-h-[620px] flex items-center bg-pink-600 overflow-hidden">
        <img
          src="/glogo.png"
          alt="Brand logo background"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-pink-900/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-16">
          <h1 className="text-6xl font-serif text-white">Exquis</h1>
          <p className="mt-6 max-w-xl text-lg text-pink-100 leading-relaxed">
            A refined fragrance house inspired by nature,
            minimalism, and intentional craftsmanship.
          </p>
        </div>
      </div>

      {/* ===== SECTION 01 (LIGHT BACKGROUND, IMAGE RIGHT) ===== */}
      <div className="bg-pink-50 py-24">
        <div className="max-w-6xl min-h-[320px] mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="text-7xl font-serif text-pink-900">01</h2>
            <p className="mt-6 max-w-md text-lg text-pink-900 leading-relaxed">
              Our fragrances are crafted to feel calm,
              elegant, and deeply personal.
            </p>
          </div>

          <div className="flex justify-end">
            <img
              src="/3Dmage.png"
              alt="Perfume lifestyle"
              className="w-full max-w-md rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* ===== SECTION 02 (DARK BACKGROUND, IMAGE LEFT) ===== */}
      <div className="bg-pink-900 py-24 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div className="flex justify-start order-2 md:order-1">
            <img
              src="/per.png"
              alt="Natural ingredients"
              className="w-full max-w-md rounded-2xl object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-7xl font-serif text-white">02</h2>
            <p className="mt-6 max-w-md text-lg text-pink-100 leading-relaxed">
              We source ingredients responsibly, ensuring
              sustainability remains central to every blend.
            </p>
          </div>
        </div>
      </div>

      {/* ===== SECTION 03 (LIGHT BACKGROUND, IMAGE RIGHT) ===== */}
      <div className="bg-pink-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="text-7xl font-serif text-pink-900">03</h2>
            <p className="mt-6 max-w-md text-lg text-pink-900 leading-relaxed">
              Minimal design meets timeless fragrance,
              allowing the scent to speak for itself.
            </p>
          </div>

          <div className="flex justify-end">
            <img
              src="/botp.png"
              alt="Minimal perfume aesthetic"
              className="w-full max-w-md rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

    </section>
<Footer/>
    </div>
    )
}