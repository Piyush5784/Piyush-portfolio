"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { ActivityCalendar, type Activity } from "react-activity-calendar";

const emptySubscribe = () => () => {};

// Returns false on the server and during the initial client render (so SSR
// output and first hydration pass match exactly), then true from then on.
function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function GithubCalendar({ data }: { data: Activity[] }) {
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  const colorScheme = hasMounted && resolvedTheme === "dark" ? "dark" : "light";

  return (
    <ActivityCalendar
      data={data}
      colorScheme={colorScheme}
      theme={{
        light: ["hsl(0, 0%, 92%)", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        dark: ["hsl(0, 0%, 15%)", "#0e4429", "#006d32", "#26a641", "#39d353"],
      }}
      showWeekdayLabels
      style={{ accentColor: "Canvas" }}
      blockRadius={3}
    />
  );
}
