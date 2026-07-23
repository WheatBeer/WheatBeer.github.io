"use client";

import { useState } from "react";
import { FaCheck, FaShareAlt } from "react-icons/fa";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
        return;
      } catch {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access unavailable; nothing more we can do.
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-opacity hover:bg-indigo-500"
      aria-label="Share this page"
    >
      {copied ? <FaCheck size={16} /> : <FaShareAlt size={16} />}
    </button>
  );
}
