import Link from "next/link";
import { CreditCard, PlusCircle } from "lucide-react";

export default function QuickActions() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#071B3B] mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Link
          href="/sales-executive/card-ai"
          className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-5 flex items-center justify-between hover:shadow-sm transition"
        >
          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-lg bg-[#F3F6FB] flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-[#071B3B]" />
            </div>

            <div>
              <h3 className="font-semibold text-[#071B3B] text-sm md:text-base">
                Upload Card
              </h3>

              <p className="text-xs md:text-sm text-gray-500">
                Scan a visiting card using AI
              </p>
            </div>
          </div>

          <span className="text-lg font-medium flex-shrink-0">
            →
          </span>
        </Link>

        <Link
          href="/sales-executive/add-leads"
          className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex items-center justify-between hover:shadow-sm transition"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#F3F6FB] flex items-center justify-center">
              <PlusCircle className="w-6 h-6 text-[#071B3B]" />
            </div>

            <div>
              <h3 className="font-semibold text-[#071B3B]">
                Add Lead Manually
              </h3>

              <p className="text-sm text-gray-500">
                Create a new lead manually
              </p>
            </div>
          </div>

          <span>→</span>
        </Link>
      </div>
    </div>
  );
}