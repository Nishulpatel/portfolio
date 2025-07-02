export default function HomePage(){
  return(
    <>
      <div className="h-screen bg-white dark:bg-black flex items-center justify-center transition-all, duration-300">
    <div className="max-w-xl mb-140 px-6 text-sm leading-relaxed font-light">
      <h1 className="font-serif text-2xl mb-4">
         N—D<sup className="text-xs align-super">©</sup>
      </h1>
       <p className="font-sans mb-3 border-b border-gray-500  dark:border-white pb-3">
         Nishul Dhakar is a full-stack developer passionate about building clean interfaces & smart systems. Currently exploring AI-powered tools and digital productivity.
      </p>
      <span className=""></span>
      <p className="font-sans dark:text-neutral-100">
        My 2025 portfolio is under construction — while that’s happening, you can find me <a href="https://hey.nishul.dev" target="_blank" className="underline dark:text-white hover:text-gray-400">Links</a>.
       </p>
  </div>
 </div>
    </>
  )
}