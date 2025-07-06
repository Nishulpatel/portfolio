"use client";


export default function QuickInfo(){

    return (
        <>
            <aside className="space-y-8">
             <div>
              <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                Status
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Available for work
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Open to freelance
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                Focus
              </h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li>Full-Stack Development</li>
                <li>AI/ML Engineering</li>
                <li>DSA & Problem Solving</li>
              </ul>
            </div>
          </aside>
        </>
    )
}