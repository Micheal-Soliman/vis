import '../styles/globals.css';
export const metadata = { 
  title: 'Top 10% Mindset Marketers - Mohamed Elsawaf',
  description: 'A training program for marketers, business owners, and marketing managers.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-cairo text-left">{children}</body>
    </html>
  );
}