"use client";

import { useEffect, useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import { useLocalStorage } from "react-use";
import { SEARCH_URLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Home() {
  const [day, setDay] = useState("Today");
  const [time, setTime] = useState("00:00");
  const [query, setQuery] = useState("trydevhub+github");
  const [searchProvider, setSearchProvider] = useLocalStorage(
    "provider",
    "brave",
  );

  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const format = hour >= 12 ? "PM" : "AM";

  const fullDay = date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const search_url = SEARCH_URLS[searchProvider as string];

  useEffect(() => {
    setTime(`${hour}:${minute < 10 ? `0${minute}` : minute} ${format}`);
  }, []);

  useEffect(() => {
    setDay(fullDay);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTime(`${hour}:${minute < 10 ? `0${minute}` : minute} ${format}`);
    }, 1000);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold text-rosePine-text">{day}</h1>
        <span className="text-rosePine-muted text-lg">{time}</span>
      </div>
      <div className="px-5 py-3 max-w-xl bg-rosePine-surface hover:bg-rosePine-overlay rounded-full w-full flex">
        <input
          onChange={(e) => setQuery(e.target.value.replaceAll(" ", "+"))}
          placeholder="Search on the web..."
          className="outline-none placeholder:text-rosePine-muted text-rosePine-subtle bg-transparent w-full"
        />
        <SearchNormal1
          onClick={() => (location.href = `${search_url}?q=${query}`)}
          variant="Bulk"
          size={25}
          className="text-rosePine-iris cursor-pointer"
        />
      </div>
      <div className="flex w-full space-x-1 rounded-full p-1 max-w-xl bg-rosePine-surface">
        <button
          onClick={() => setSearchProvider("brave")}
          className={cn(
            "w-full rounded-full py-2 text-sm font-medium leading-5 text-center flex items-center justify-center gap-1",
            searchProvider === "brave"
              ? "bg-rosePine-overlay text-rosePine-text"
              : "text-rosePine-muted",
          )}
        >
          <img
            alt=""
            src="/assets/brave.svg"
            className="w-4 accent-rosePine-muted"
          />
          Brave
        </button>
        <button
          onClick={() => setSearchProvider("google")}
          className={cn(
            "w-full rounded-full py-2 text-sm font-medium leading-5 text-center flex items-center justify-center gap-1",
            searchProvider === "google"
              ? "bg-rosePine-overlay text-rosePine-text"
              : "text-rosePine-muted",
          )}
        >
          <img
            alt=""
            src="/assets/google.svg"
            className="w-4 accent-rosePine-muted"
          />
          Google
        </button>
      </div>
    </div>
  );
}
