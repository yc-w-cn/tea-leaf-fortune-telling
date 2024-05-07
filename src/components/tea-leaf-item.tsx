"use client";

import { useState } from "react";
import Markdown from "markdown-to-jsx";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export type TeamLeafItemProps = {
  name: string;
  description: string;
};

export function TeamLeafItem({ name, description }: TeamLeafItemProps) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div
      className={cn(
        "border rounded-lg p-12 cursor-pointer w-full flex flex-col gap-4 justify-center items-center",
        showDetail ? "md:col-span-2" : undefined
      )}
      onClick={() => setShowDetail((previous) => !previous)}
    >
      <h3 className="font-bold text-3xl">{name}</h3>
      {showDetail && (
        <Markdown className="text-md text-gray-700 flex flex-col gap-4">
          {description}
        </Markdown>
      )}
    </div>
  );
}
