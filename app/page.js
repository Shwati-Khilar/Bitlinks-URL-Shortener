
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-200">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden my-12 p-0 md:p-0">
        {/* Text Left Side */}
        <div className="flex flex-col gap-8 justify-center bg-white bg-opacity-95 p-10 md:p-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 text-center drop-shadow transition duration-300">
            The best URL shortener in the market
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center font-medium">
            <b>Bitlinks</b> was made for privacy and simplicity.
            No logins, no tracking—just fast and reliable link shortening.
            Whether you’re a business managing campaigns or an individual sharing links,
            <span className="font-semibold text-purple-700"> your privacy is always protected.</span>
          </p>
          <div className="text-md text-gray-600 max-w-lg mx-auto text-center">
            <div className="font-semibold text-purple-700 mb-2">Why choose us?</div>
            <ul className="list-disc list-inside space-y-1 text-left mx-auto inline-block">
              <li>Absolutely no data tracking or user profiling.</li>
              <li>Lightning-fast redirects with 99.9% uptime.</li>
              <li>Unlimited short links — no sign-up required.</li>
              <li>Share with confidence, powered by secure tech.</li>
            </ul>
          </div>
          <div className="flex gap-6 justify-center mt-5">
            <Link href="/shorten" passHref>
              <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-extrabold text-lg px-8 py-3 rounded-xl shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                Try now
              </button>
            </Link>
            <Link href="https://github.com/Shwati-Khilar" passHref>
              <button className="bg-white border-2 border-purple-500 text-purple-700 font-extrabold text-lg px-7 py-3 rounded-xl shadow transition-all duration-200 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                Github
              </button>
            </Link>
          </div>
        </div>

        {/* Image Right Side */}
        <div className="flex justify-center items-center bg-white bg-opacity-95 p-6 md:p-12">
          <img
            className="max-w-[450px] w-full h-auto rounded-2xl shadow-lg object-contain"
            alt="A vector illustration of teamwork and brainstorming"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/154/417/small_2x/teamwork-or-team-building-office-business-meeting-conference-and-brainstorming-annual-report-and-statistics-graphics-discussion-and-planning-in-flat-style-free-vector.jpg"
          />
        </div>
      </section>
    </main>
  );
}
