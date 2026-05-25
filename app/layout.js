import "./globals.css";

export const metadata = {
  title: "VEXcode GO — Offline Workspace",
  description: "Offline VEXcode GO workspace. Run entirely in your browser with no internet required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
