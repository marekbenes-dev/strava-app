"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [activityType, setActivityType] = useState<string>("Ride");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ activityType, fromDate, toDate });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="w-full max-w-md p-8">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
            Strava Activity Filter
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="activityType"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Activity Type
              </label>
              <select
                id="activityType"
                value={activityType}
                onChange={(e) => setActivityType(e.target.value)}
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Ride">Ride</option>
                <option value="Run">Run</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="fromDate"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                From
              </label>
              <DatePicker
                id="fromDate"
                selected={fromDate}
                onChange={(date: Date | null) => setFromDate(date)}
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                dateFormat="yyyy-MM-dd"
                placeholderText="Select start date"
              />
            </div>

            <div>
              <label
                htmlFor="toDate"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                To
              </label>
              <DatePicker
                id="toDate"
                selected={toDate}
                onChange={(date: Date | null) => setToDate(date)}
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                dateFormat="yyyy-MM-dd"
                placeholderText="Select end date"
                minDate={fromDate || undefined}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Apply Filter
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
