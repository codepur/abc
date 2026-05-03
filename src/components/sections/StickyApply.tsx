"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function StickyApply() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="#register">
        <Button
          variant="primary"
          size="md"
          className="clip-skew-sm shadow-[0_8px_28px_rgba(5,61,202,0.22)]"
        >
          Apply Now — Limited Seats
        </Button>
      </Link>
    </div>
  );
}
