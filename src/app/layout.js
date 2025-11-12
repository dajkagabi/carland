import "./globals.css";

export const metadata = {
  title: "CARLAND - Car Website",
  description: "Build a Car Website Using Next JS, Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className="min-h-screen bg-gray-50">
        <main>{children}</main>
      </body>
    </html>
  );
}
