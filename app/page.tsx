import Image from "next/image";
import CopyEmailLink from "./components/copy-email-link";
import TextLink from "./components/text-link";

export default function Home() {
  const webringUrl = "https://cs.uwatering.com/#https://yohancepawania.com";

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center px-6 py-10 sm:py-12">
      <div className="flex flex-col gap-8 sm:gap-10">
        <section id="top" className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-[2rem]">
            Yohance Pawania
          </h1>
          <p className="font-mono text-sm tracking-[0.08em] text-[var(--muted)]">
            computer science @ uwaterloo
          </p>
        </section>

        <section id="recents" className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            <i>recently</i>
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted-strong)] sm:text-base">
            <li>built embedded telemetry software [and played with humanoid robots] @ <TextLink href="https://www.geotab.com">geotab</TextLink></li>
            <li>interned at <TextLink href="https://www.sunnybrook.ca">sunnybrook</TextLink>, designing PCBs for noninvasive brain surgery</li>
            <li>organized canada&apos;s largest high school <TextLink href="https://2025.eurekahacks.ca/">hackathon</TextLink></li>
            <li>built modular e-bike conversion kits [backed by <TextLink href="https://www.bloomberg.org">bloomberg philanthropies</TextLink>]</li>
            <li>led firmware development for my school&apos;s electric racekart team</li>
          </ul>
        </section>

        <footer id="socials" className="grid w-full grid-cols-1 items-start gap-2 border-t border-[var(--border)] pt-6 text-sm sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4 sm:text-base">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a className="social-link" href="https://github.com/ypawania" target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/yohance-pawania-30aa902a4/" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a className="social-link" href="https://x.com/ypawania_" target="_blank" rel="noopener noreferrer">
              twitter
            </a>
            <nav
              aria-label="UW CS Webring"
              className="flex items-center gap-2"
            >
              <a className="social-link leading-none" href={`${webringUrl}?nav=prev`} aria-label="Previous UW CS Webring site">
                ←
              </a>
              <a
                className="webring-link"
                href={webringUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UW CS Webring"
              >
                <Image
                  src="https://cs.uwatering.com/icon.white.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="webring-icon-dark h-[1em] w-[1em] opacity-75 transition-opacity duration-150"
                  unoptimized
                />
                <Image
                  src="https://cs.uwatering.com/icon.black.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="webring-icon-light h-[1em] w-[1em] opacity-75 transition-opacity duration-150"
                  unoptimized
                />
              </a>
              <a className="social-link leading-none" href={`${webringUrl}?nav=next`} aria-label="Next UW CS Webring site">
                →
              </a>
            </nav>
          </div>
          <CopyEmailLink className="social-link justify-self-start cursor-copy appearance-none border-0 bg-transparent p-0 text-left sm:justify-self-end sm:text-right" />
        </footer>
      </div>
    </main>
  );
}
