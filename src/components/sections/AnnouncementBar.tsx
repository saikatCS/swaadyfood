import { Utensils } from "lucide-react";

const MESSAGE = "SWAADY IS NOW LIVE IN AMBASSA, DHALAI DISTRICT — SERVICE AVAILABLE ONLY IN THIS AREA";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-brand py-3.5 sm:py-4" role="region" aria-label="Service announcement">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-4 px-6 text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase sm:text-sm"
              >
                <Utensils className="h-4 w-4 shrink-0 opacity-80" />
                {MESSAGE}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
