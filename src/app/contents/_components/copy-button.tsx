"use client";

import { useState } from "react";
import { Clipboard } from "lucide-react";
import { ClipboardCheck } from "lucide-react";

export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className="border py-1 px-2 text-sm rounded-sm"
    >
      {isCopied ? (
        <div className="flex justify-between gap-1">
          <ClipboardCheck size={20} />
          Copied!
        </div>
      ) : (
        <div className="flex justify-between gap-1">
          <Clipboard size={20} />
          Copy
        </div>
      )}
    </button>
  );
};
