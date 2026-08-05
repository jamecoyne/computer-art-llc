export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col bg-white px-6">
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <h1 className="text-center text-2xl font-normal tracking-tight text-black sm:text-4xl">
          Computer, Art, LLC
        </h1>
        <p className="max-w-md text-center text-sm font-normal text-neutral-600 sm:text-base">
          Computer Art, LLC is a creative services and production company by
          Viola He and Jame Coyne
        </p>
        <a
          href="https://www.instagram.com/computerartllc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-700 underline underline-offset-4 hover:text-blue-900 sm:text-base"
        >
          Instagram
        </a>
      </div>
      <footer className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pb-6 text-center text-sm text-neutral-600">
        <a
          href="mailto:jame@computerart.llc"
          className="underline underline-offset-4 hover:text-black"
        >
          jame@computerart.llc
        </a>
        <a
          href="mailto:viola@computerart.llc"
          className="underline underline-offset-4 hover:text-black"
        >
          viola@computerart.llc
        </a>
      </footer>
    </main>
  );
}
