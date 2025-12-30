import "./globals.css";

export const metadata = {
    title: "International Shipping Quote",
    description: "Get instant quotes for international shipping",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="antialiased">{children}</body>
        </html>
    );
}