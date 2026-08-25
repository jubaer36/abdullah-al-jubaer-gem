import { cn } from "@/lib/utils";

export function DetailHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-[10px] font-mono tracking-[0.15em] uppercase text-dim mb-2", className)}>
      {children}
    </p>
  );
}
