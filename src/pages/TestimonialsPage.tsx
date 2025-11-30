import React from "react";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Raj Patel",
    role: "Student – Engineering Laptop",
    message:
      "My laptop was not turning on at all. SK Infotech repaired the motherboard and also cleaned the system. Now it works like new. Very clear explanation and fair pricing.",
    rating: 5,
  },
  {
    name: "Neha Shah",
    role: "Working Professional – WFH",
    message:
      "Got SSD upgrade and Windows installation done. The laptop is now super fast and the work was completed in the same day at my home. Highly recommended service.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Small Business Owner",
    message:
      "We got CCTV installation and desktop maintenance for our shop. Good quality cameras, neat wiring and proper training on mobile viewing.",
    rating: 4,
  },
];

const TestimonialsPage: React.FC = () => {
  return (
    <section className="bg-slate-950 text-slate-50 py-10 md:py-14 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              What Our Customers Say
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              A quick look at feedback from customers who trusted SK Infotech
              for their laptop, desktop and CCTV service in Vadodara.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
            ⭐ Trusted Local Service
          </span>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-400/70 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition"
            >
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-semibold">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  “{t.message}”
                </p>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < t.rating ? "text-yellow-400" : "text-slate-600"
                      }
                    >
                      ★
                    </span>
                  ))}
                </span>
                <span>Service in Vadodara</span>
              </div>
            </article>
          ))}
        </div>

        {/* Feedback UI (frontend only, no backend) */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-sm font-semibold mb-2">
              Your Experience with SK Infotech
            </h2>
            <p className="text-xs text-slate-300 mb-3">
              You&apos;re always welcome to share feedback after your service.
              This helps us maintain quality and improve our support.
            </p>
            <ul className="text-xs text-slate-200 space-y-1.5">
              <li>• How was the behavior of the technician?</li>
              <li>• Was the issue explained clearly?</li>
              <li>• Are you satisfied with the repair time & cost?</li>
              <li>• Would you recommend us to others?</li>
            </ul>
            <p className="mt-3 text-[11px] text-slate-400">
              You can send your feedback on WhatsApp or Google Maps review
              after the service is completed.
            </p>
          </div>

         <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between">
  <h2 className="text-sm font-semibold mb-2">
    ⭐ Share & Read Google Reviews
  </h2>
  <p className="text-xs text-slate-300 mb-4">
    Your feedback helps us improve and also helps others choose trusted repair
    service in Vadodara. You can rate, write a review or read what other
    customers have experienced.
  </p>

  {/* Google Review Button */}
  <a
    href="https://share.google/gEkOyokuhFqrGzLwO"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-amber-400 text-amber-300 font-semibold text-sm px-5 py-2 hover:bg-amber-400/10 transition w-fit"
  >
    {/* Star Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.77 5.8 21 7 14.14l-5-4.87 7.1-1.01z" />
    </svg>
    Google Reviews
  </a>

  <p className="mt-4 text-[11px] text-slate-400">
    You will be redirected to Google Business page where you can add your
    rating, write a review, and see feedback shared by other SK Infotech
    customers.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
