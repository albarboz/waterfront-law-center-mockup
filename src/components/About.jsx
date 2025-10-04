import aboutPhoto from "../assets/bolingallery(1).jpg";

export default function About() {
  return (
    <div className="grid grid-cols-1 items-start gap-y-10 gap-x-12 lg:grid-cols-12">
      
      {/* Column 1: Content (mobile-first first) */}
      <div className="order-2 lg:order-4 lg:col-span-6">
        <p className="mt-0 max-w-prose text-base leading-relaxed text-slate-600">
          <strong>The Waterfront Law Center</strong> is located in the{" "}
          <strong>Waterfront Park Building</strong> in{" "}
          <strong>downtown Edmonds</strong>, next to the ferry terminal and
          other public transportation services. It provides a unique opportunity
          for <strong>sole-practitioners and small firms </strong>to provide
          client services provided by larger firms, at a fraction of the fixed
          costs associated with the traditional 24/7 law firm model. It is
          located <strong>18 miles north</strong> of the King County Courthouse
          in Seattle and <strong>17 miles south</strong> of the Snohomish County
          Courthouse in Everett.{" "}
          <strong>Regular ferry service within walking distance</strong> makes
          it possible for lawyers living on the Olympic peninsula to maintain a
          very cost-effective office in the Seattle metro area.
        </p>
        <br />
        <p className="mt-1 max-w-prose text-base leading-relaxed text-slate-600">
          Thanks to <strong>new electronic filing rules</strong>, it is no
          longer necessary to have an office in downtown Seattle. You can also{" "}
          <strong>avoid the costs and commitment</strong> of a long-term lease,
          furnishings, equipment, and a payroll. At the Waterfront Law Center,
          you <strong>pay for only what you need, when you need it</strong>,
          without any{" "}
          <strong>compromise in the quality, service delivery,</strong> or the{" "}
          <strong>appearance of your practice.</strong> You also have the extra
          advantage of enjoying the collegiality and support of an association
          with many other lawyers with similar practices, professional interests
          and professional experiences.
        </p>
        <br />
        <p className="mt-1 max-w-prose text-base leading-relaxed text-slate-600">
          The Waterfront Law Center provides services to attorneys on a
          <strong> month-to-month</strong> basis for as little as{" "}
          <strong>$500 per month</strong>. The{" "}
          <strong>basic service package</strong> includes the following features
          and amenities:
        </p>

        {/* Amenities Checklist */}

        <div className="mt-8">
          {/* <Button href="tel:14255828165">
            <span className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-600">
              Call 425.582.8165
            </span>
          </Button> */}
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
  );
}
