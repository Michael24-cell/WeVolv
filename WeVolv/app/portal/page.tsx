export default function Portal() {
  return (
    <div className="w-full h-[calc(100vh-5rem)] lg:h-[calc(100vh-7rem)]">
      <iframe
        src="https://portal.wevolvlife.com"
        title="WeVolv Portal"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
