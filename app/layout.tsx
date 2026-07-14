import type { Metadata } from "next";
import { AppProviders } from "@/context/AppProviders";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Learning Hub — Vibe Coding & AI Automation cho Corporate Affairs",
  description:
    "Nền tảng học tập về Vibe Coding và AI Automation cho Corporate Affairs, HR/People Experience và Quản trị rủi ro doanh nghiệp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ChatbotWidget />
        </AppProviders>
      </body>
    </html>
  );
}
