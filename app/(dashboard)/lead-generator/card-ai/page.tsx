import UploadCard from "@/components/lead-generator/card-ai/UploadCard";
import CardPreview from "@/components/lead-generator/card-ai/CardPreview";
import ExtractedInfo from "@/components/lead-generator/card-ai/ExtractedInfo";

export default function CardAIPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">
        Card AI
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="space-y-6">
          <UploadCard />
          <CardPreview />
        </div>

        <ExtractedInfo />

      </div>
    </div>
  );
}