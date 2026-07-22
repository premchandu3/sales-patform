"use client";

interface Props {
  prompt: string;
  response: string;
}

export default function ResearchResult({
  prompt,
  response,
}: Props) {
  return (
    <div className="h-full overflow-y-auto px-10 py-8">

      <h2 className="text-3xl font-bold mb-3">
        Research Result
      </h2>

      <p className="text-gray-500 mb-8">
        {prompt}
      </p>

      <div className="bg-white border rounded-2xl p-6 whitespace-pre-line">
        {response}
      </div>

    </div>
  );
}