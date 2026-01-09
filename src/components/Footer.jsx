export default function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Solutions Arkitect
          </p>

          <p className="text-xs text-slate-500">
            Website created by{" "}
            <a
              href="https://smatheny.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-700 underline-offset-4 hover:underline"
            >
              Stephen Matheny
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
