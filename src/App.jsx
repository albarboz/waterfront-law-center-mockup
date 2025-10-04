import { useState } from "react";
import ferryPhoto from "./assets/edmonds-ferry.jpg";
import aboutPhoto from "./assets/bolingallery(1).jpg";
import Gallery from "../src/components/gallery.jsx";
import { EdmondsSection } from "./components/edmondsSection.jsx";






// --- REUSABLE COMPONENTS ----------------------------------------------------

/**
 * A styled, reusable button with a ferry-themed accent color.
 */
const Button = ({ href = "#", children, className = "", type = "button" }) => (
  <a
    href={href}
    type={type}
    className={`inline-block rounded-md bg-teal-800 px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 ${className}`}
  >
    {children}
  </a>
);

/**
 * A responsive container for content sections with alternating backgrounds.
 */
const Section = ({ id, title, subtitle, children, className = "" }) => (
  <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {(title || subtitle) && (
        <header className="mb-12 max-w-3xl">
          {title && (
            <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </div>
  </section>
);

/**
 * A responsive top navigation bar with updated branding.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Gallery", "gallery"],
    ["About Edmonds", "edmonds"],
    ["Contact", "contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-baseline">
          <span className="text-xl font-bold text-slate-900">
            The Waterfront Law Center
          </span>
          <span className="ml-2 hidden text-base font-normal text-slate-500 sm:inline">
            | Edmonds, WA
          </span>
        </a>
        <button
          className="group inline-flex h-12 w-12 items-center justify-center rounded-lg md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 stroke-slate-700 group-hover:stroke-teal-700"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <ul className="hidden items-center gap-x-8 md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-md font-semibold text-slate-600 transition-colors hover:text-teal-700"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="flex flex-col space-y-2 border-t border-slate-200/80 px-4 py-4 md:hidden">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-700"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

/**
 * An image component with lazy loading enabled by default.
 */
const Img = ({ alt, src, className = "" }) => (
  <img
    loading="lazy"
    alt={alt}
    src={src}
    className={`h-auto w-full ${className}`}
  />
);

// --- MAIN APP COMPONENT -----------------------------------------------------

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-50 font-sans text-slate-800 antialiased">
      <Navbar />

      <main>
        {/* Hero */}
        <header
          id="home"
          className="relative flex min-h-[100vh] items-center justify-center isolate overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <Img
              alt="The iconic green and white Washington State Ferry docked in Edmonds, with Puget Sound in the background."
              src={ferryPhoto}
              className="h-full w-full object-cover"
            />
            {/* This dark, semi-transparent layer sits on top of the image but behind the text. */}
            <div className="absolute inset-0 bg-slate-900/60" />
          </div>

          {/* --- CHANGES START HERE --- */}
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-shadow-lg/30">
              The Waterfront Law Center
            </h1>

            <p className="mt-6 mx-auto max-w-prose text-lg leading-relaxed text-slate-100 drop-shadow-sm text-shadow-lg/30 md:text-[22px] font-stretch-110% tracking-normal">
              A Virtual Office Exclusively for Lawyers. Offering client meeting
              spaces and professional services for sole-practitioners and small
              firms, conveniently located next to the Edmonds-Kingston Ferry,
              the Amtrak Station, Sound Transit facilities, and the community
              transit center.
            </p>
            {/* --- CHANGES END HERE --- */}

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {/* Buttons can be restyled for better contrast if needed, but the default should work well. */}
              <Button href="#contact">Schedule a Visit</Button>
              <a
                href="#about"
                className="font-semibold text-white transition-colors hover:text-slate-200"
              >
                About the Waterfront Law Center &rarr;
              </a>
            </div>
          </div>
        </header>

        {/* About & Amenities - Redesigned Layout 2.1 */}
        <Section
          id="about"
          title="About the Waterfront Law Center"
          className="bg-white"
        >
          <div className="grid grid-cols-1 items-start gap-y-10 gap-x-12 lg:grid-cols-12">
            {/* Column 1: Content (mobile-first first) */}
            <div className="order-2 lg:order-4 lg:col-span-6">
              <p className="mt-0 max-w-prose text-base leading-relaxed text-slate-600">
                <strong>The Waterfront Law Center</strong> is located in the{" "}
                <strong>Waterfront Park Building</strong> in{" "}
                <strong>downtown Edmonds</strong>, next to the ferry terminal
                and other public transportation services. It provides a unique
                opportunity for{" "}
                <strong>sole-practitioners and small firms </strong>to provide
                client services provided by larger firms, at a fraction of the
                fixed costs associated with the traditional 24/7 law firm model.
                It is located <strong>18 miles north</strong> of the King County
                Courthouse in Seattle and <strong>17 miles south</strong> of the
                Snohomish County Courthouse in Everett.{" "}
                <strong>Regular ferry service within walking distance</strong>{" "}
                makes it possible for lawyers living on the Olympic peninsula to
                maintain a very cost-effective office in the Seattle metro area.
              </p>
              <br />
              <p className="mt-1 max-w-prose text-base leading-relaxed text-slate-600">
                Thanks to <strong>new electronic filing rules</strong>, it is no
                longer necessary to have an office in downtown Seattle. You can
                also <strong>avoid the costs and commitment</strong> of a
                long-term lease, furnishings, equipment, and a payroll. At the
                Waterfront Law Center, you{" "}
                <strong>pay for only what you need, when you need it</strong>,
                without any{" "}
                <strong>compromise in the quality, service delivery,</strong> or
                the <strong>appearance of your practice.</strong> You also have
                the extra advantage of enjoying the collegiality and support of
                an association with many other lawyers with similar practices,
                professional interests and professional experiences.
              </p>
              <br />
              <p className="mt-1 max-w-prose text-base leading-relaxed text-slate-600">
                The Waterfront Law Center provides services to attorneys on a
                <strong> month-to-month</strong> basis for as little as{" "}
                <strong>$500 per month</strong>. The{" "}
                <strong>basic service package</strong> includes the following
                features and amenities:
              </p>

              {/* Amenities Checklist */}

              <div className="mt-8">
                <Button href="tel:14255828165">
                  <span className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-600">
                    Call 425.582.8165
                  </span>
                </Button>
              </div>
            </div>

            {/* Column 2: Image */}
            <figure className="order-2 lg:order-4 lg:col-span-6">
              {/* Tip: replace with an actual office/waterfront photo in your assets for best performance */}
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl ring-1 ring-black/5"
                src={aboutPhoto}
                alt="Modern conference room with a view of the water"
                loading="lazy"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="mt-8">
                <ul
                  className="space-y-3 text-base text-slate-700"
                  aria-label="Included amenities"
                >
                  {[
                    "Beautiful office space created specifically for lawyers",
                    "Located on the Sound between King and Snohomish County Courts",
                    "Very near all major transportation hubs (ferry, rail & bus)",
                    "Fabulous views from every office",
                    "Every office tastefully furnished",
                    "Free receptionist services",
                    "Free parking for you and your clients",
                    "Free use of multiple conference rooms",
                    "Free wireless internet access in every office",
                    "Free mail service",
                    "Free use of kitchen",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg
                        className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </figure>
          </div>
        </Section>

        {/* Gallery */}
        <Section id="gallery" title="A Glimpse Inside">
          <Gallery />
        </Section>

        {/* About Edmonds */}
          <Section id="edmonds" title="About Edmonds" className="bg-slate-100">
         <EdmondsSection />
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact Us" className=" bg-white">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left Side: Contact Info */}
            <div className="space-y-4 text-lg">
              <p className="font-semibold text-slate-900">
                Waterfront Law Center
              </p>
              <address className="not-italic text-slate-600">
                Waterfront Park Building, Suite 308
                <br />
                144 Railroad Avenue
                <br />
                Edmonds, WA 98020
              </address>
              <div>
                <strong className="text-slate-900">Phone:</strong>{" "}
                <a
                  className="text-teal-700 hover:text-teal-600"
                  href="tel:14255828165"
                >
                  425.582.8165
                </a>
              </div>
              <div>
                <strong className="text-slate-900">Email:</strong>{" "}
                <a
                  className="text-teal-700 hover:text-teal-600"
                  href="mailto:waterfrontlawcenter@gmail.com"
                >
                  waterfrontlawcenter@gmail.com
                </a>
              </div>
            </div>

            {/* Right Side: Map and Directions Button */}
            <div className="space-y-5">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.966774643538!2d-122.38382402375545!3d47.81180417122176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901b8b832b872b%3A0x10344b58e7275782!2s144%20Railroad%20Ave%2C%20Edmonds%2C%20WA%2098020!5e0!3m2!1sen!2sus!4v1668822233157!5m2!1sen!2sus"
                  className="h-100 w-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </Section>
      </main>




      {/* Footer */}
      <footer className="border-t bg-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-slate-600 md:flex-row md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Waterfront Law Center. All Rights
            Reserved.
          </p>
          <p>Next to the Edmonds-Kingston Ferry • Amtrak & Sounder Rail</p>
        </div>
      </footer>
    </div>
  );
}
