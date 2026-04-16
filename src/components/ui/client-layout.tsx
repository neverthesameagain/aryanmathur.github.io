"use client";
import { PageLoader } from "@/components/ui/pageloader";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      {children}
    </>
  );
}