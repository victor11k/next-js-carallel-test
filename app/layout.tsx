//@styles
import "@styles";
import { Roboto } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

//@components
import { ToastWrapper } from "@components/ui";

//@providers
import { SessionProvider } from "@providers";

//@types
import type { Metadata } from "next";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canderella App",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  description: "Fancy Next.js application for Canderella",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={roboto.className}>
      <SessionProvider>
        <ToastWrapper />
        <div className="mx-auto h-screen max-w-screen-ml bg-primary-light">
          {children}
        </div>
      </SessionProvider>
    </body>
  </html>
);

export default RootLayout;
