/* Minimal inline SVGs — avoids pulling in an icon library for three glyphs. */

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <path d="m2 6 10 7 10-7" />
    </svg>
  );
}

export function KaggleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M18.79 20.24h-2.72a.61.61 0 0 1-.5-.26l-4.7-6.3-1.32 1.26v4.85a.46.46 0 0 1-.46.45H6.98a.46.46 0 0 1-.46-.45V3.46A.46.46 0 0 1 6.98 3h2.11a.46.46 0 0 1 .46.46v10.35l5.57-5.63a.6.6 0 0 1 .44-.19h2.78c.2 0 .38.13.44.32.06.19 0 .4-.15.53l-5.32 5 5.83 7.61a.46.46 0 0 1-.35.75Z" />
    </svg>
  );
}

export function MediumIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M3 4.8c0-.44.19-.86.5-1.16.32-.3.75-.46 1.2-.44h.02c.44-.02.87.14 1.19.44.31.3.5.72.5 1.16 0 .43-.19.85-.5 1.15-.32.3-.75.47-1.2.45-.44.02-.87-.15-1.19-.45A1.6 1.6 0 0 1 3 4.8Zm.14 2.55h3.14v11.86H3.14V7.35Zm5.02 0h3.01v1.62h.04c.42-.8 1.44-1.86 3.03-1.86 3.24 0 3.84 2.14 3.84 4.92v7.18h-3.14v-6.37c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.44 1.66-2.44 3.36v6.48H8.16V7.35Z" />
    </svg>
  );
}

export function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
