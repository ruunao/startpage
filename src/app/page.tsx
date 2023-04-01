"use client";

import { useEffect, useState } from "react";
import { AddSquare, SearchNormal1, Star1 } from "iconsax-react";
import { SEARCH_API_URL, SHORTCUTS } from "@/lib/constants";
import { useRouter } from "next/router";
import Button from "@/components/button";

export default function Home() {
  const [time, setTime] = useState("00:00");
  const [query, setQuery] = useState<string | null>()

  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const format = hour >= 12 ? "PM" : "AM";

  const shortcuts = SHORTCUTS.map((shortcut, index) => (
    <div
      key={index}
      className="w-auto bg-rosePine-surface p-4 truncate hover:bg-rosePine-overlay cursor-pointer"
    >
      {shortcut.name}
    </div>
  ));

  useEffect(() => {
    setTime(`${hour}:${minute < 10 ? `0${minute}` : minute} ${format}`);
  }, [hour, minute]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-5xl font-bold text-rosePine-text">{time}</h1>
      <div className="px-5 py-3 max-w-xl bg-rosePine-surface hover:bg-rosePine-overlay rounded-full w-full flex">
        <input
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search on the web..."
          className="outline-none placeholder:text-rosePine-muted placeholder:italic text-rosePine-subtle bg-transparent w-full"
        />
        <SearchNormal1
        onClick={() =>
          (location.href = `${SEARCH_API_URL}?q=${query}`)
        }
          variant="Bulk"
          size={25}
          className="text-rosePine-iris cursor-pointer"
        />
      </div>
      <div className="flex gap-3 justify-center">
        <Button>
          <Star1 variant="Bulk" size={20} />
          Support me
        </Button>
        <Button>
          <AddSquare variant="Bulk" size={20} />
          Add shortcuts
        </Button>
      </div>
    </div>
  );
}
