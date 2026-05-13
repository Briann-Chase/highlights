import { anton } from "../Font/Font";

const videos = [
  {
    id: "na_-1PU-1LU",
    title: "Athlete Clips work sample 1",
  },
  {
    id: "D3urcZybv-E",
    title: "Athlete Clips work sample 2",
  },
  {
    id: "jGUcirafChE",
    title: "Athlete Clips work sample 3",
  },
  {
    id: "cBLQ-Ww_91Y",
    title: "Athlete Clips work sample 4",
  },
  {
    id: "E1mQyUNFBxA",
    title: "Athlete Clips work sample 5",
  },
  {
    id: "Z-fjZDuioqc",
    title: "Athlete Clips work sample 6",
  },
];

const Videos = () => {
  return (
    <section
      className="px-4 py-14 sm:px-6 sm:py-16 lg:px-10"
      style={{ backgroundColor: "#2d204e" }}
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className={`${anton.className} text-center text-[2.6rem] leading-none text-white uppercase sm:text-[3.6rem]`}
        >
          Our Work
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-2xl bg-black/20 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;