import { basePath } from "@/site.config";
import type { Slide } from "@/components/primitives/Slideshow";

/* "What I've been up to" slideshow.
   Grouped by event; order here = order on the page.
   Files live in /public/Images/<folder>/. Edit `title` / `caption` per image
   manually — paths and basePath are handled below. `meta` and `link` are optional. */
type Group = {
  folder: string;
  meta: string;
  shots: { file: string; title: string; caption: string; link?: string }[];
};

const groups: Group[] = [
  {
    folder: "IUT_Datathon",
    meta: "IUT Datathon · Organizer",
    shots: [
      {
        file: "Event Head ID Card.jpg",
        title: "IUT Datathon",
        caption: "Event-head ID card for the datathon I organized at IUT.",
      },
      {
        file: "Running the Onsite event.jpg",
        title: "IUT Datathon",
        caption: "Running the onsite event on competition day.",
      },
      {
        file: "Onsite presentation .jpg",
        title: "IUT Datathon",
        caption: "Teams presenting their solutions onsite.",
      },
      {
        file: "Running and scoring for the presentation time.jpg",
        title: "IUT Datathon",
        caption: "Coordinating and scoring the presentation round.",
      },
      {
        file: "Prize giving.JPG",
        title: "IUT Datathon",
        caption: "Prize-giving ceremony for the winning teams.",
      },
      {
        file: "Token of appreciation presented to me.jpg",
        title: "IUT Datathon",
        caption: "Receiving a token of appreciation for organizing the event.",
      },
    ],
  },
  {
    folder: "Bubt Datathon",
    meta: "BUBT Datathon · Participant",
    shots: [
      {
        file: "Presentation Time.jpeg",
        title: "BUBT Datathon",
        caption: "Presenting our team's solution to the judges.",
      },
      {
        file: "Presentation Time 2.jpg",
        title: "BUBT Datathon",
        caption: "Walking through our approach during the presentation round.",
      },
      {
        file: "Prize Giving Ceremony.jpeg",
        title: "BUBT Datathon",
        caption: "Prize-giving ceremony at the close of the datathon.",
      },
    ],
  },
  {
    folder: "IUT-hackathon",
    meta: "IUT Hackathon",
    shots: [
      {
        file: "Hackathon time late night.jpg",
        title: "IUT Hackathon",
        caption: "Late-night build session during the hackathon.",
      },
      {
        file: "Evaluation ongoing.jpg",
        title: "IUT Hackathon",
        caption: "Project evaluation underway with the judges.",
      },
      {
        file: "hackathon-runnersuptrophy.jpeg",
        title: "IUT Hackathon",
        caption: "Runners-up trophy from the hackathon.",
      },
    ],
  },
  {
    folder: "Project Aqua",
    meta: "Project Aqua · Software Team",
    shots: [
      {
        file: "Drain Cleaning Bot Prototype.jpg",
        title: "Project Aqua",
        caption: "Drain-cleaning bot prototype built by the team.",
      },
      {
        file: "UIU Visit.jpeg",
        title: "Project Aqua",
        caption: "Team visit to UIU.",
      },
      {
        file: "UIU Visit2.jpeg",
        title: "Project Aqua",
        caption: "Team visit to UIU.",
      },
    ],
  },
  {
    folder: "VAND 4",
    meta: "VAND 4.0 · CVPR 2026 Challenge",
    shots: [
      {
        file: "Scoreboard Result.png",
        title: "VAND 4.0 Industrial Track",
        caption: "5th place on the zero-shot anomaly detection scoreboard.",
        link: "https://benchmark.mvtec.com/vand2026-leaderboard?setting=zero-shot",
      },
    ],
  },
];

export const moments: Slide[] = groups.flatMap((g) =>
  g.shots.map((s) => ({
    title: s.title,
    meta: g.meta,
    caption: s.caption,
    link: s.link,
    image: encodeURI(`${basePath}/Images/${g.folder}/${s.file}`),
  })),
);
