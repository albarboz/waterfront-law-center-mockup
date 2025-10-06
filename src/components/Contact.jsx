 export const Contact =  () =>  {
    return (
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
    )
}
