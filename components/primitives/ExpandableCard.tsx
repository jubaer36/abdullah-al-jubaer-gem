"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "@/components/primitives/icons";
import { cn } from "@/lib/utils";

export function ExpandableCard({
  header,
  children,
  defaultOpen = false,
  className,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  const toggle = () => setOpen((o) => !o);

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface transition-all duration-300 hover:border-signal/40",
        open && "border-signal/30 bg-elevated",
        className
      )}
    >
      {/* div+role=button (not <button>) because header may contain real links —
          nesting <a> inside <button> is invalid HTML and breaks hydration. */}
      <div
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-start justify-between gap-4 p-6 text-left cursor-pointer"
      >
        <div className="flex-1 min-w-0">{header}</div>
        <ChevronDownIcon
          className={cn(
            "shrink-0 mt-1 text-dim transition-transform duration-300",
            open && "rotate-180 text-signal"
          )}
        />
      </div>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-5 border-t border-border -mt-px">{children}</div>
        </div>
      </div>
    </div>
  );
}
