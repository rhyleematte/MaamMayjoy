export const metadata = {
  title: "Full Stack Developer Portfolio",
  description: "Portfolio of a Full Stack Developer",
};

import ClientHeader from "./ClientHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "black",
          color: "white",
          fontFamily: "'Poppins', Arial, sans-serif",
        }}
      >
        <ClientHeader />
        {children}
      </body>
    </html>
  );
}
