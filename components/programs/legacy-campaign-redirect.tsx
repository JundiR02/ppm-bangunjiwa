"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { campaignHref } from "@/lib/programs";

/** Campaign links used to be /program?id=…; send those visitors to the campaign's new home. */
export function LegacyCampaignRedirect() {
  const id = useSearchParams().get("id");
  React.useEffect(() => {
    if (id) window.location.replace(campaignHref(id));
  }, [id]);
  return null;
}
