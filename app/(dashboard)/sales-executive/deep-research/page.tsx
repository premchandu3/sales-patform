"use client";

import { useState } from "react";

import ResearchSidebar from "@/components/sales-executive/deep-research/ResearchSidebar";
import ResearchHome from "@/components/sales-executive/deep-research/ResearchHome";
import ResearchResult from "@/components/sales-executive/deep-research/ResearchResult";

export default function DeepResearchPage() {
  const [hasResult, setHasResult] =
    useState(false);

  return (
    <div className="h-[calc(100vh-120px)] bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
      <div className="flex h-full">
        <ResearchSidebar
          onNewResearch={() => setHasResult(false)}
        />

        {!hasResult ? (
          <ResearchHome
            onSearch={() => setHasResult(true)}
          />
        ) : (
          <ResearchResult />
        )}
      </div>
    </div>
  );
}