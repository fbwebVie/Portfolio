export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} — Сделано на Next.js
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            className="text-sm text-gray-400 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://t.me/@taisiafb"
            target="_blank"
            className="text-sm text-gray-400 hover:text-black transition-colors"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}