export default function IndexPage() {
  return (
    <div id="home" className="relative w-screen h-[80vh] overflow-hidden ">

      <div
        className="absolute inset-0 bg-[gray-50] dark:bg-[#e4e4e4]"
        aria-hidden="true"
      />
      {/* Image qui sort de la déchirure */}
      <img
        src="/images/pp.jpg"
        alt="Profil"
        className="absolute top-29 left-30 h-[700px] w-auto object-cover"
        style={{
          transform: "translateX(1020px) translateY(-50px)", // positionnement exact
          zIndex: 0, // derrière l'overlay
        }}
      />

      {/* Overlay clair/sombre avec trou décalé vers le centre */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-[#FAF9F6] dark:text-[#1d1d1d]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <mask id="tearMask">
            <rect x="0" y="0" width="1440" height="900" fill="white" />
            <path
              d="M1240,0
            C1000,250 1080,450 1120,600
            C1180,750 1080,850 1240,900
            C1340,750 1320,500 1240,0
            Z"
              fill="black"
              transform="scale(1.6, 1) translate(-450,0)"
            />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="1440"
          height="900"
          fill="currentColor"
          mask="url(#tearMask)"
        />
      </svg>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-left ml-[40vh] justify-center h-full text-[#5BAA9C] dark:text-[#F7F7F7]">
        <h1
          className="text-6xl font-extrabold tracking-tight"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Portfolio
        </h1>
        <p
          className="mt-4 text-2xl font-semibold tracking-wide"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Développeur Full Stack Junior
        </p>
      </div>
    </div>
  );
}
