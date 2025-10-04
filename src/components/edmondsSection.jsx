import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

// --- Data (Images reordered for the new layout) ---
// IMPORTANT: Replace these with your actual image imports
import e1 from "../assets/mainstreet.jpg";
import e2 from "../assets/downtown.jpg";
import e3 from "../assets/sunset.jpg";

const edmondsImages = [
  // The first image is now the large, featured one
  { src: e2, alt: 'The Edmonds waterfront with a train passing by and the Olympic Mountains.' },
  // These two will be the smaller images below
  { src: e3, alt: 'View of the Edmonds-Kingston ferry departing from the dock on a sunny day.' },
  { src: e1, alt: 'A charming street in downtown Edmonds with flower baskets hanging from lamp posts.' },
];

const edmondsLinks = [
  { text: 'Official City Website', href: '#', target: '_blank', rel: 'noopener noreferrer' },
  { text: 'Edmonds Chamber of Commerce', href: '#', target: '_blank', rel: 'noopener noreferrer' },
  { text: 'Visit Edmonds', href: '#', target: 'blank', rel: 'noopener noreferrer' },
  { text: 'Edmonds School District', href: '#', target: 'blank', rel: 'noopener noreferrer' },
];


// --- Reusable Components (Scoped to this file) ---

/**
 * Renders a balanced grid of images with a featured image on top.
 */
const ImageGallery = ({ images }) => (
  // This grid creates a large top image and two smaller ones below
  <div className="grid grid-cols-2 gap-4 sm:gap-6">
    {images.map((image, index) => (
      <div
        key={index}
        className={`overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5 ${
          index === 0 ? 'col-span-2' : 'aspect-h-2 aspect-w-3 sm:aspect-h-3 sm:aspect-w-4' // Give smaller images a consistent aspect ratio
        }`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    ))}
  </div>
);

/**
 * Renders a styled card with a list of external links.
 */
const LinksCard = ({ title, links }) => (
  <div className="mt-12 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <ul role="list" className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link.text}>
          <a
            {...link}
            className="group inline-flex items-center gap-x-2 text-base font-medium text-teal-700 transition hover:text-teal-900"
          >
            <span>{link.text}</span>
            <ArrowUpRightIcon className="h-5 w-5 text-teal-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);


// --- Main Section Component ---

export const EdmondsSection = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-y-12 lg:grid-cols-2 lg:gap-x-16">
      
      {/* Left Column: Text Content & Links */}
      <div className="flex h-full flex-col">
        <div className="space-y-6 text-base leading-relaxed text-slate-600">
          <p>
            As the oldest incorporated city in Snohomish County (1890), Edmonds boasts a deep-rooted history that began with logging camps and waterfront mills. Today, it has blossomed into a picturesque community of over 42,000 residents, beautifully situated on the shores of Puget Sound.
          </p>
          <p>
            Now a major transportation hub with ferry, train, and bus services, Edmonds offers a thriving downtown, a bustling marina, and a beloved summer farmer’s market. Its active arts community and scenic beauty make it one of the county's most desirable destinations.
          </p>
        </div>
        <LinksCard title="Explore Edmonds Further" links={edmondsLinks} />
      </div>

      {/* Right Column: Image Gallery */}
      <div className="w-full">
        <ImageGallery images={edmondsImages} />
      </div>

    </div>
  );
};