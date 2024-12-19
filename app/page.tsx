import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { FeatureCard } from '@/components/feature-card'
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className=" flex justify-center">
          <div className="px-10">
            <h1 className="text-4xl font-bold text-center mb-6">
              Next.js Starter Template
            </h1>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              A powerful foundation for your next project
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <a href="https://github.com/Hunde-D/Next-template ">
                  Get Started on GitHub
                </a>
              </Button>
            </div>
          </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Hunde-D Next.js Starter Template. All rights reserved.
      </footer>
    </div>
  )
}

const features = [
  {
    title: "⚡️ Next.js 15 App Router",
    description: "Built with the latest Next.js features for optimal performance."
  },
  {
    title: "⚛️ React 19",
    description: "Leverage the power of React for building interactive user interfaces."
  },
  {
    title: "🧩 shadcn/ui Components",
    description: "Beautiful, accessible components for rapid development."
  },
  {
    title: "🌙 Dark Mode Support",
    description: "Integrated next-themes for easy theme switching."
  },
  {
    title: "🔧 TypeScript",
    description: "Full TypeScript support for type-safe development."
  },
  {
    title: "🌈 Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development."
  },
  {
    title: "🎨 Lucide & React Icons",
    description: "Access to a wide range of customizable Lucide icons for enhanced UI design.",
  },
  {
    title: "🧹 ESLint & Prettier",
    description: "Pre-configured linting and code formatting."
  },
  {
    title: "📦 npm & pnpm Support",
    description: "Choose your preferred package manager."
  }
]