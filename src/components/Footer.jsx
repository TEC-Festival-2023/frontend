function Footer() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/assets/Vector12.png')",
          backgroundSize: "100% 100%",
        }}
        className="relative flex flex-col items-center"
      >
        <div className="lg:hidden">
          <img src="/assets/Vector12.png" className="w-[100%]" />
        </div>
        <div className="w-full -mt-32 md:-mt-48 lg:mt-40 mb-10 px-4 md:px-12 lg:max-w-[1250px]">
          <div className="flex my-8 justify-between items-center bg-[#FFE99E]">
            {/* logo and name */}
            <div>
              <a href="/">
                <div className="flex flex-wrap items-center">
                  <img
                    src="/assets/icon.png"
                    alt=""
                    className="h-[60px] md:h-[100px]"
                  />
                  <div className="text-[#7EA8FF] text-center text-2xl md:text-5xl lg:text-7xl font-poppins font-bold text-shadow-1px md:text-shadow-3px">
                    TECFest
                  </div>
                </div>
              </a>
            </div>
            {/* social media */}
            <div class="flex items-center justify-center">
              {/* tiktok */}
              <a
                href="https://www.tiktok.com/@tec.festival"
                target="_blank"
                class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-secondary border-slate-300 hover:border-primary hover:bg-primary hover:text-[#7EA8FF]"
              >
                <svg
                  role="img"
                  width="20"
                  class="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>TikTok</title>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* instagram */}
              <a
                href="https://www.instagram.com/tec.festival/"
                target="_blank"
                class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-secondary border-slate-300 hover:border-primary hover:bg-primary hover:text-[#7EA8FF]"
              >
                <svg
                  role="img"
                  width="20"
                  class="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>

              {/* twitter */}
              <a
                href="https://twitter.com/tec_festival"
                target="_blank"
                class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-secondary border-slate-300 hover:border-primary hover:bg-primary hover:text-[#7EA8FF]"
              >
                <svg
                  role="img"
                  width="20"
                  class="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mx-4">
            <div className="md:grid md:grid-cols-[60%_40%] flex flex-col justify-between">
              <div className="grid grid-cols-[40%_40%_20%] gap-8">
                {/* events */}
                <div className="w-full mb-6">
                  <a
                    href="/events"
                    className="text-lg md:text-xl font-bold hover:text-[#7EA8FF]"
                  >
                    Events
                  </a>
                  <ul className="text-sm md:text-base font-semibold mt-4">
                    <li className="mb-2">
                      <a
                        href="/events/tecfest-talks"
                        className="hover:text-[#7EA8FF]"
                      >
                        TECFest Talks
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/events/youth-entrepreneur-lab"
                        className="hover:text-[#7EA8FF]"
                      >
                        Youth Entrepreneur Lab
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/events/startup-expo"
                        className="hover:text-[#7EA8FF]"
                      >
                        Start-Up Expo
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/events/grand-summit"
                        className="hover:text-[#7EA8FF]"
                      >
                        Grand Summit
                      </a>
                    </li>
                  </ul>
                </div>
                {/* compe */}
                <div className="w-full mb-6">
                  <a
                    href="/competitions"
                    className="text-lg md:text-xl font-bold mb-4 hover:text-[#7EA8FF]"
                  >
                    Competitions
                  </a>
                  <ul className="text-sm md:text-base font-semibold mt-4">
                    <li className="mb-2">
                      <a
                        href="/competitions/business-case"
                        className="hover:text-[#7EA8FF]"
                      >
                        Business Case Competition (BCC)
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/competitions/business-plan"
                        className="hover:text-[#7EA8FF]"
                      >
                        Business Plan Competition (BPC)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* contacts */}
              <div className="">
                <h2 className="text-lg font-bold mb-4">Contacts</h2>
                <div className="grid grid-cols-2 gap-8">
                  {/* Ojan */}
                  <div className="">
                    <p className="md:text-lg font-bold">Events</p>
                    <p className="text-sm md:text-base text-primary font-semibold">
                      Fauzan Arkadani
                    </p>
                    <div className="flex">
                      <svg
                        role="img"
                        width="18"
                        className="fill-current mr-1"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>LINE</title>
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                      </svg>
                      <p className="text-sm md:text-base">afhunterccc</p>
                    </div>
                  </div>
                  {/* Luki */}
                  <div className="">
                    <p className="text-sm md:text-lg font-bold">Competitions</p>
                    <p className="text-sm md:text-base text-primary font-semibold">
                      Luki Zarkasi
                    </p>
                    <div className="flex">
                      <svg
                        role="img"
                        width="18"
                        className="fill-current mr-1"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>LINE</title>
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                      </svg>
                      <p className="text-sm md:text-base">waktu22</p>
                    </div>
                  </div>
                  {/* Cepus */}
                  <div className="">
                    <p className="text-sm md:text-lg font-bold">IT</p>
                    <p className="text-sm md:text-base text-primary font-semibold">
                      Ceavin Rufus
                    </p>
                    <div className="flex">
                      <svg
                        role="img"
                        width="18"
                        className="fill-current mr-1"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>LINE</title>
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                      </svg>
                      <p className="text-sm md:text-base">kzsrceavinjr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 mx-4 text-xs md:text-sm font-semibold">
            <p>©2023 - TECFest. All rights reserved</p>
            <p>Built by TECFest IT Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
