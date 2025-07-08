import Link from 'next/link';
import GitHubCalendar from 'react-github-calendar';

export default function Github() {
    return(
    <section className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
      <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        GitHub <span className=" text-blue-500">Contributions</span> 
      </div>
      <Link href="https://github.com/nishuldhakar" target="_blank" rel="noopener noreferrer">
        <div className="border rounded-lg p-4 bg-white dark:bg-gray-950 shadow-sm hover:opacity-80 transition">
          <GitHubCalendar username="nishuldhakar" />
        </div>
      </Link>
      </section>
    )
}