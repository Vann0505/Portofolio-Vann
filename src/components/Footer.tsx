import { profile } from "../data/profile";

// Footer sederhana: copyright di tengah.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl justify-center">
        <p className="text-sm text-ink-400 text-center">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}