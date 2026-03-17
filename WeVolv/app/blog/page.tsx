import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <div className="w-full h-[calc(100vh-5rem)] lg:h-[calc(100vh-7rem)]">
      <iframe
        src="https://portal.wevolvlife.com/blog"
        title="Blog"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
