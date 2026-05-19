import Logo from "./Logo";

export default function Footer() {
  const footerNavs = [
    { href: "#", name: "About" },
    { href: "#", name: "Features" },
    { href: "#", name: "Pricing" },
    { href: "#", name: "Careers" },
    { href: "#", name: "Support" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <p className="leading-relaxed mt-4 text-sm text-slate-500">
            SmartNotes AI helps you capture, organize, and summarize your
            thoughts instantly. Build your second brain with the power of
            artificial intelligence.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center justify-center mt-8 gap-6 sm:gap-8">
          {footerNavs.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="text-sm font-medium hover:text-white transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright & Socials */}
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} SmartNotes AI. All rights
            reserved.
          </div>

          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border border-slate-800 rounded-full flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
              <a href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                </svg>
              </a>
            </li>

            <li className="w-10 h-10 border border-slate-800 rounded-full flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
              <a href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                </svg>
              </a>
            </li>

            <li className="w-10 h-10 border border-slate-800 rounded-full flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors">
              <a href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10,2.531c-4.125,0-7.469,3.344-7.469,7.469c0,4.125,3.344,7.469,7.469,7.469c4.125,0,7.469-3.344,7.469-7.469C17.469,5.875,14.125,2.531,10,2.531 M10,3.776c1.48,0,2.84,0.519,3.908,1.384c-1.009,0.811-2.111,1.512-3.298,2.066C9.914,6.072,9.077,5.017,8.14,4.059C8.728,3.876,9.352,3.776,10,3.776 M6.903,4.606c0.962,0.93,1.82,1.969,2.53,3.112C7.707,8.364,5.849,8.734,3.902,8.75C4.264,6.976,5.382,5.481,6.903,4.606 M3.776,10c2.219,0,4.338-0.418,6.29-1.175c0.209,0.404,0.405,0.813,0.579,1.236c-2.147,0.805-3.953,2.294-5.177,4.195C4.421,13.143,3.776,11.648,3.776,10 M10,16.224c-1.337,0-2.572-0.426-3.586-1.143c1.079-1.748,2.709-3.119,4.659-3.853c0.483,1.488,0.755,3.071,0.784,4.714C11.271,16.125,10.646,16.224,10,16.224 M13.075,15.407c-0.072-1.577-0.342-3.103-0.806-4.542c0.673-0.154,1.369-0.243,2.087-0.243c0.621,0,1.22,0.085,1.807,0.203C15.902,12.791,14.728,14.465,13.075,15.407 M14.356,9.378c-0.868,0-1.708,0.116-2.515,0.313c-0.188-0.464-0.396-0.917-0.621-1.359c1.294-0.612,2.492-1.387,3.587-2.284c0.798,0.97,1.302,2.187,1.395,3.517C15.602,9.455,14.99,9.378,14.356,9.378"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
