export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto flex max-w-2xl flex-col gap-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">Content Draft Generator</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Enter your keyword details to generate a draft.
          </p>
        </div>

        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="primary-keyword" className="block text-sm font-medium">
              Primary Keyword
            </label>
            <input
              id="primary-keyword"
              name="primaryKeyword"
              type="text"
              placeholder="e.g. AI content generation"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none ring-0 focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="secondary-keywords" className="block text-sm font-medium">
              Secondary Keywords
            </label>
            <input
              id="secondary-keywords"
              name="secondaryKeywords"
              type="text"
              placeholder="e.g. SEO, blog writing, automation"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none ring-0 focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="number-of-tools" className="block text-sm font-medium">
              Number of Tools
            </label>
            <input
              id="number-of-tools"
              name="numberOfTools"
              type="number"
              min="1"
              defaultValue={3}
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none ring-0 focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-900 px-4 py-3 font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Generate Draft
          </button>
        </form>
      </div>
    </main>
  );
}
