import { DATA } from "@/data/resume";
import { GithubCalendar } from "@/components/github-calendar";
import type { Activity } from "react-activity-calendar";

const GITHUB_USERNAME = DATA.contact.social.GitHub.url.split("/").pop();

async function getContributions(): Promise<Activity[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      { next: { revalidate: 60 * 60 * 12 } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.contributions ?? null;
  } catch {
    return null;
  }
}

export default async function GithubActivitySection() {
  const contributions = await getContributions();

  if (!contributions) return null;

  return (
    <section id="github-activity">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                GitHub Activity
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              A year of contributions
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Here&apos;s a look at my recent GitHub activity.
            </p>
          </div>
        </div>
        <div className="w-full max-w-200 mx-auto overflow-x-auto rounded-xl border border-border bg-background p-4">
          <GithubCalendar data={contributions} />
        </div>
      </div>
    </section>
  );
}
