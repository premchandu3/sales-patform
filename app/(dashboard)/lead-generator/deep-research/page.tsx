"use client";

import { useEffect, useState } from "react";

import ResearchResult from "@/components/lead-generator/deep-research/ResearchResult";
import RecentChats from "@/components/lead-generator/deep-research/RecentChats";

interface Research {
  _id: string;
  title: string;
  prompt: string;
  response: string;
}

export default function DeepResearchPage() {
  const [prompt, setPrompt] = useState("");

  const [researches, setResearches] =
    useState<Research[]>([]);

  const [selectedResearch,
    setSelectedResearch] =
    useState<Research | null>(null);

  const fetchResearches =
    async () => {
      const response = await fetch(
        "/api/research"
      );

      const data =
        await response.json();

      setResearches(data);
    };

useEffect(() => {
  const loadData = async () => {
    await fetchResearches();
  };

  loadData();
}, []);

  const handleResearch =
    async () => {
      if (!prompt.trim()) return;

      const response = await fetch(
        "/api/research",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            prompt,
          }),
        }
      );

      const data =
        await response.json();

      setSelectedResearch(data);

      setPrompt("");

      fetchResearches();
    };

  const deleteChat =
    async (id: string) => {
      await fetch(
        `/api/research/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchResearches();

      if (
        selectedResearch?._id === id
      ) {
        setSelectedResearch(
          null
        );
      }
    };

  return (
    <div className="h-[calc(100vh-120px)] flex">

      <div className="w-[240px] border-r pr-4">

        <button
          onClick={() =>
            setSelectedResearch(
              null
            )
          }
          className="w-full h-11 rounded-lg bg-[#071B3B] text-white mb-8"
        >
          New Research
        </button>

        <h3 className="font-semibold mb-4">
          Recent Chats
        </h3>

        <RecentChats
          chats={researches}
          onSelect={
            setSelectedResearch
          }
          onDelete={deleteChat}
        />

      </div>

      <div className="flex-1">

        {selectedResearch ? (
          <ResearchResult
            prompt={
              selectedResearch.prompt
            }
            response={
              selectedResearch.response
            }
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full">

            <h1 className="text-4xl font-bold mb-4">
              What do you want to
              research today?
            </h1>

            <div className="w-full max-w-[600px] border rounded-xl p-4 bg-white">

              <textarea
                value={prompt}
                onChange={(e) =>
                  setPrompt(
                    e.target.value
                  )
                }
                placeholder="Describe what you want to research..."
                className="w-full h-24 resize-none outline-none"
              />

              <div className="flex justify-end mt-4">

                <button
                  onClick={
                    handleResearch
                  }
                  className="bg-[#071B3B] text-white px-5 py-2 rounded-lg"
                >
                  Research
                </button>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}