import { anton } from "../Font/Font";

function GoogleG({ className = "size-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars({ className = "size-4" }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${className} text-[#FABB05]`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const reviews = [
  {
    name: "Charlie Creed",
    initial: "C",
    time: "3 days ago",
    text: "Absolutely top-notch service. The team turned my son's raw game footage into a polished highlight reel that truly captured his best moments. Communication was excellent throughout, delivery was fast, and the final product helped him land interest from three college programs. Worth every penny, highly recommend to any athlete serious about getting recruited.",
  },
  {
    name: "Dave Joe",
    initial: "D",
    time: "3 days ago",
    text: "Top-notch service. They turned raw game footage into a polished highlight reel that helped my son get interest from three college programs. Fast delivery, great communication, highly recommend.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h2
            className={`${anton.className} text-[2.25rem] leading-none text-[#1a1a1a] uppercase sm:text-[3rem] lg:text-[3.5rem]`}
          >
            Customer Reviews
          </h2>

          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#ddd] bg-white px-4 py-1.5 text-xs text-[#666]">
            <GoogleG className="size-4" />
            Google Verified Reviews
          </span>
        </div>

        <div
          className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3 lg:gap-6"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="flex flex-col items-center rounded-2xl border border-[#eee] bg-white px-6 py-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.04)] sm:px-8">
            <GoogleG className="size-12" />
            <p className="mt-5 text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
              4.9 / 5
            </p>
            <div className="mt-3">
              <Stars className="size-5" />
            </div>
            <p className="mt-3 text-sm text-[#888]">Based on 500+ reviews</p>

            <div className="my-6 h-px w-full bg-[#eee]" />

            <div className="flex items-center gap-2 text-sm font-medium text-[#1a73e8]">
              <span className="flex size-5 items-center justify-center rounded-full bg-[#1a73e8] text-white">
                <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M2 6.5 L4.5 9 L10 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Google Verified
            </div>

            <a
              href="https://www.google.com/search?q=Athlete+Clips+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4fc3f7] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#39b5ec]"
            >
              <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Review Us
              <svg className="size-3.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M3.5 2.5 H9.5 V8.5 M9.2 2.8 L2.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl border border-[#eee] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e8e8e8] text-sm font-bold text-[#333]">
                    {review.initial}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#1a1a1a] sm:text-base">
                      {review.name}
                    </p>
                    <p className="text-xs text-[#888]">{review.time}</p>
                  </div>
                </div>
                <GoogleG className="size-5 shrink-0" />
              </div>

              <div className="mt-4">
                <Stars className="size-4" />
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[#333] sm:text-[0.95rem] sm:leading-6">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
