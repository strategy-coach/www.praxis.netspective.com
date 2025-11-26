import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent pb-2">
            The Praxis
          </h1>


          <p className="text-xl md:text-2xl text-fd-muted-foreground max-w-2xl mx-auto">
            A living manifesto for the AI age, focused on helping humans transition from the old world of work to the new
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/docs/the-praxis"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Directives Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Key Directives
          </h2>
          <p className="text-center text-fd-muted-foreground mb-12 max-w-2xl mx-auto">
            Core manifestos and doctrines guiding our AI-native approach
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* AI Interactions Engineering Manifesto */}
            <Link href="/docs/ai-interactions-engineering-manifesto/trustable-ai-interactions-engineering-manifesto" className="group p-6 rounded-xl border-2 border-purple-200 dark:border-purple-900 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-slate-900 hover:shadow-2xl hover:shadow-purple-500/20 transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Trustable AI Interactions Engineering Manifesto
                  </h3>
                  <p className="text-fd-muted-foreground">
                    Building trustworthy, verifiable, and auditable AI systems for B2B environments
                  </p>
                </div>
              </div>
            </Link>

            {/* AI Native Technical Communications */}
            <Link href="/docs/ai-native-technical-communications-doctrine/introduction" className="group p-6 rounded-xl border-2 border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-900 hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    AI Native Technical Communications Doctrine
                  </h3>
                  <p className="text-fd-muted-foreground">
                    Principles for effective documentation and communication in AI-native workflows
                  </p>
                </div>
              </div>
            </Link>

            {/* AI Native Software Engineering */}
            <Link href="/docs/ai-native-tech-stack-engineering/strategy" className="group p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-900 bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/30 dark:to-slate-900 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-900 dark:text-cyan-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    AI-Native Tech Stack & Engineering Philosophy
                  </h3>
                  <p className="text-fd-muted-foreground">
                    Building B2B web applications without traditional frameworks in the AI era
                  </p>
                </div>
              </div>
            </Link>

            {/* AI Context Playbooks */}
            <Link href="/docs/ai-context-playbooks-section/ai-as-colleague-not-tool" className="group p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-900 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/30 dark:to-slate-900 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-900 dark:text-emerald-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    AI Context Playbooks
                  </h3>
                  <p className="text-fd-muted-foreground">
                    Practical guides for AI as a colleague, prompt reskilling, and becoming an IC
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* What You'll Find */}
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/docs/ai-interactions-engineering-manifesto/trustable-ai-interactions-engineering-manifesto" className="p-6 rounded-xl border border-fd-border bg-fd-card/50 hover:border-purple-500 hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">📜 Manifestos</h3>
              <p className="text-sm text-fd-muted-foreground">
                Core beliefs and mission that drive us in the age of AI
              </p>
            </Link>
            <Link href="/docs/ai-native-technical-communications-doctrine" className="p-6 rounded-xl border border-fd-border bg-fd-card/50 hover:border-blue-500 hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">📚 Doctrines</h3>
              <p className="text-sm text-fd-muted-foreground">
                High-level philosophies for human-AI collaboration
              </p>
            </Link>
            <Link href="docs/ai-native-tech-stack-engineering/strategy" className="p-6 rounded-xl border border-fd-border bg-fd-card/50 hover:border-cyan-500 hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">✅ Guiding Principles</h3>
              <p className="text-sm text-fd-muted-foreground">
                Actionable guidelines for decision-making with AI
              </p>
            </Link>
            <Link href="docs/ai-context-playbooks-section/ai-as-colleague-not-tool" className="p-6 rounded-xl border border-fd-border bg-fd-card/50 hover:border-emerald-500 hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-2">⚙️ Operating Guidelines</h3>
              <p className="text-sm text-fd-muted-foreground">
                Practical advice for day-to-day human-AI workflows
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent pb-2">
            Navigate the AI Transition
          </h2>
          <p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto">
            The Praxis helps our team transition from the "old world" to the "new world," offering guidance on how to evolve our roles, skills, and perspectives in a world transformed by artificial intelligence
          </p>
          <Link
            href="/docs/the-praxis"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-full font-semibold hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Explore The Praxis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
