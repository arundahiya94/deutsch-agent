import "./../styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "DeutschAgent",
  description: "Topic-based German learning packs"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <Navbar />
        <div className="mx-auto max-w-5xl p-6">
          {children}
          <footer className="mt-16 border-t pt-4 text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} DeutschAgent
          </footer>
        </div>
      </body>
    </html>
  );
}
