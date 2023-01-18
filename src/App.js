import "./App.css";
import { useState } from "react";
import usIcon from "./assets/us.svg";
import ilIcon from "./assets/il.svg";
import pic_4 from "./assets/pic_4.jpeg";
import pic_5 from "./assets/pic_5.jpg";
import pic_6 from "./assets/pic_6.jpeg";
import pic_7 from "./assets/pic_7.jpg";
import pic_8 from "./assets/pic_8.jpg";
import pic_9 from "./assets/pic_9.jpg";
import pic_10 from "./assets/pic_10.jpg";

function App() {
  const changableText = {
    en: {
      name: "Sapir Toren",
      subtitle: "Healing by touch",
      contact_me: "Contact Me",
      about_me: (
        <>
          Ridman Graduate
          <br />
          Treatments: ...
        </>
      ),
      about_me_title: <>About Me</>,
      services: <>Treatments</>,
    },
    he: {
      name: "ספיר תורן",
      subtitle: "- ריפוי במגע -",
      contact_me: "צרו קשר",
      about_me: (
        <>
          בוגרת מכללת רידמן
          <br />
          תחומי עיסוי: שוודי, רפואי, רקמות עמוקות וספורטאים עושה גם עיסוי נשים
          הרות וכוסות רוח
        </>
      ),
      about_me_title: <>קצת עליי</>,
      services: <>תחומי עיסוי</>,
    },
  };

  const [selectedLanguage, setSelectedLanguage] = useState("he");

  function onLanguageChanged() {
    setSelectedLanguage(selectedLanguage === "he" ? "en" : "he");
  }

  return (
    <main className={selectedLanguage === "he" ? "rtl" : ""}>
      <section class="parallax bg">
        <button className="language-select" onClick={() => onLanguageChanged()}>
          {/* {selectedLanguage} */}
          <img src={selectedLanguage === "he" ? ilIcon : usIcon} width="40px" />
        </button>

        <div className="title-wrpper">
          <h1>{changableText[selectedLanguage].name}</h1>
          <span className="subtitle">
            {changableText[selectedLanguage].subtitle}
          </span>
          <a href="tel:+972542341636">
            {changableText[selectedLanguage].contact_me}
          </a>
        </div>
      </section>
      <section class="no-parallax brown">
        <div className="services-wrapper">
          <span style={{ fontSize: "30px" }}>
            {changableText[selectedLanguage].services}
          </span>

          <div className="services">
            <div className="img-wrapper">
              <img src={pic_4} />
              <div className="desc">description</div>
            </div>
            <div className="img-wrapper">
              <img src={pic_5} />
              <div className="desc">description</div>
            </div>
            <div className="img-wrapper">
              <img src={pic_7} />
              <div className="desc">description</div>
            </div>
            <div className="img-wrapper">
              <img src={pic_8} />
              <div className="desc">description</div>
            </div>
            <div className="img-wrapper">
              <img src={pic_9} />
              <div className="desc">description</div>
            </div>
            <div className="img-wrapper">
              <img src={pic_10} />
              <div className="desc">description</div>
            </div>
          </div>
        </div>
      </section>
      <section class="no-parallax smaller green">
        <div className="about-me-wrapper">
          <span style={{ fontSize: "30px" }}>
            {changableText[selectedLanguage].about_me_title}
          </span>
          <span>{changableText[selectedLanguage].about_me}</span>
          <div className="divider"></div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "16px" }}
          >
            <a href="https://m.facebook.com/110648688586088/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com/sapir.toren?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M13 19.938A8.001 8.001 0 0 0 12 4a8 8 0 0 0-1 15.938V14H9v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 12.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H15c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
