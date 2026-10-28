import { Reddit_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { copy, isLocale, locales, siteUrl } from "@/content/site";
import "../globals.css";

const reddit = Reddit_Sans({ subsets: ["latin"], display: "swap", variable: "--font-reddit" });
export const metadata = { metadataBase: new URL(siteUrl) };
export function generateStaticParams() { return locales.map(locale => ({ locale })); }

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale} className={reddit.variable}><body><a href="#main" className="skip-link">{copy[locale].skip}</a><Header locale={locale} />{children}<Footer locale={locale} /></body></html>;
}
