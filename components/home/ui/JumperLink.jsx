"use client";

import Jumper from "@/features/ux/jumper";

export default function JumperLink({
  targetId,
  position = "center",
  children,
  ...props
}) {
  const handleClick = (e) => {
    e.preventDefault();
    Jumper(targetId, position);
  };

  return (
    <a href="#" onClick={handleClick} className="jumper-link" {...props}>
      {children}
    </a>
  );
}
