import '../styles/globals.css';
export const metadata = { 
  title: 'Top 10% Mindset Marketers - عبده رمضان',
  description: 'برنامج تدريبي للمسوقين واصحاب الشركات ومديري التسويق'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-cairo">{children}</body>
    </html>
  );
}