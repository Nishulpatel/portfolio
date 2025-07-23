
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { RocketIcon, CodeIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <section className="px-4 py-8">
      <BentoGrid>
        <BentoCard
          name="Launch Your Project"
          className="col-span-1"
          background={
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900" />
          }
          Icon={RocketIcon}
          description="Deploy and launch your projects easily with just a few clicks."
          href="/launch"
          cta="Get Started"
        />

        <BentoCard
          name="Developer Tools"
          className="col-span-2"
          background={
            <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900" />
          }
          Icon={CodeIcon}
          description="Powerful tools and libraries to supercharge your development process."
          href="/tools"
          cta="Explore Tools"
        />
      </BentoGrid>
    </section>
  );
}
