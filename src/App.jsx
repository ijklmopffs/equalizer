import logo from "../assets/logo.svg";
import illustration from "../assets/illustration-app.png";
import bg1 from "../assets/bg-pattern-1.svg";
import bg2 from "../assets/bg-pattern-2.svg";
import ios from "../assets/icon-apple.svg";
import andriod from "../assets/icon-android.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";

import "./App.css";

function App() {
  return (
    <>
      <main className="max-w-[1100px] mx-auto p-4 bg-background-mobile md:bg-background-tablet lg:bg-background-desktop">
        <nav>
          <img src={logo} alt="" />
        </nav>
        <section className="flex items-start my-20">
          <div>
            <h1 className="font-bold text-4xl md:text-8xl text-start text-[#191826]">
              We make your music sound extraordinary.
            </h1>
            <p className="text-[#191826] md:w-[30rem] text-start my-5 text-xl">
              A system audio equalizer specifically designed for Android and
              iOS. Freely tune the way your music sounds with a professional
              grade parametric EQ & volume mixer. Control bass, mids, treble,
              gain control, reverb, and more!
            </p>
          </div>
          <div className="relative hidden md:block">
            <img src={bg1} alt="" className="relative bottom-48" />
          </div>
        </section>

        <section className="w-4/5 bg-[#191826] rounded-lg relative mx-auto my-80">
          <img src={bg2} alt="" className="mx-auto" />
          <img src={illustration} alt="" className="w-96 absolute bottom-20" />
          <div className="bg-[#fa7453] text-white w-80 text-start rounded-lg p-4 absolute right-10 top-64">
            <h3 className="font-bold text-4xl">Premium EQ</h3>
            <p className="text-lg">
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </p>
            <p>
              <span className="font-bold text-6xl">$4</span> / month
            </p>
            <div className="flex flex-col gap-2 items-center my-8">
              <button className="bg-[#191826] flex p-2 hover:bg-[#66e2dc] font-bold px-4 gap-2 rounded-md items-center">
                <img src={ios} alt="" className="w-4" />
                ios Download
              </button>
              <button className="bg-white text-[#191826] flex p-2 hover:bg-[#ffb964] font-bold px-4 gap-2 rounded-md items-center">
                <img src={andriod} alt="" className="w-4" />
                Android Download
              </button>
            </div>
          </div>
        </section>

        <footer className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0 md:items-center">
          <img src={logo} alt="" />
          <p className="w-96 text-start">
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at equalizer@example.com
          </p>
          <div className="flex items-center gap-2">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
