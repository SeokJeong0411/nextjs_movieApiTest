import NavBar from "@/components/NavBar";
import "../styles/globals.css";
import StyledJsxRegistry from "./registry";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
