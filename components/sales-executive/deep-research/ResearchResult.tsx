import ResearchChatInput from "./ResearchChatInput";

export default function ResearchResult() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-12 py-10">
        <div className="max-w-[900px]">
          <div className="inline-block bg-[#F4F7FC] px-5 py-4 rounded-2xl text-[#374151] text-[15px]">
            Analyze Acme Technologies Pvt Ltd and identify business
            opportunities.
          </div>

          <div className="mt-10">
            <h2 className="text-[32px] font-bold text-[#071B3B]">
              Company Overview
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-[#4B5563]">
              Acme Technologies Pvt Ltd is a Bangalore-based IT
              services company specializing in software development,
              AI solutions, cloud services and enterprise digital
              transformation. The company serves SMEs and enterprise
              clients across multiple industries.
            </p>

            <h2 className="mt-10 text-[32px] font-bold text-[#071B3B]">
              Strengths
            </h2>

            <ul className="mt-5 space-y-3 text-[16px] text-[#4B5563]">
              <li>• Strong online presence and branding</li>
              <li>• Growing client base across industries</li>
              <li>• Diverse service offerings</li>
              <li>• Experienced technical team</li>
            </ul>

            <h2 className="mt-10 text-[32px] font-bold text-[#071B3B]">
              Opportunities
            </h2>

            <ul className="mt-5 space-y-3 text-[16px] text-[#4B5563]">
              <li>• AI workflow automation solutions</li>
              <li>• Enterprise SaaS implementation</li>
              <li>• Digital transformation consulting</li>
              <li>• Cloud migration services</li>
            </ul>

            <h2 className="mt-10 text-[32px] font-bold text-[#071B3B]">
              Recommended Sales Approach
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-[#4B5563]">
              Focus on automation challenges, operational efficiency,
              cloud modernization and AI-driven business growth.
              Position solutions around measurable ROI and long-term
              scalability.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E5E7EB] p-6 bg-white">
        <ResearchChatInput />
      </div>
    </div>
  );
}