import type { Metadata } from "next";
import { PageTop } from "@/components/shell/page-top";
import { AdminApp } from "@/components/admin/admin-app";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <>
      <PageTop crumb="Admin" />
      <AdminApp />
    </>
  );
}
