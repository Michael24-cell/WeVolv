"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface IframeModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title?: string;
}

export default function IframeModal({ isOpen, onClose, src, title = "Schedule" }: IframeModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIframeLoaded(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[600px] h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="text-sm font-medium text-[#2D2D2D]">{title}</span>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-800"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Loading state */}
        {!iframeLoaded && (
          <div className="absolute inset-0 top-[57px] flex items-center justify-center bg-white z-10">
            <Image
              src="/icon.png"
              alt="WeVolv"
              width={56}
              height={56}
              className="animate-pulse opacity-70"
            />
          </div>
        )}

        {/* iFrame */}
        <iframe
          src={src}
          title={title}
          className="flex-1 w-full border-none"
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          allow=""
          onLoad={() => setIframeLoaded(true)}
        />
      </div>
    </div>
  );
}
