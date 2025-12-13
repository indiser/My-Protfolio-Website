import { projects } from '@/data/projects';
import { getRepoStats } from '@/lib/github';
import ProjectCard from './ProjectCard';

export default async function WorkGrid() {
    const projectsWithStats = await Promise.all(
        projects.map(async (project) => {
            const stats = await getRepoStats(project.repoName);
            return { ...project, stats };
        })
    );

    return (
        <section id="work" className="relative container mx-auto px-6 py-24 md:py-32 max-w-5xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Selected Work
                    </h2>
                    <p className="text-zinc-400 max-w-md text-lg">
                        Open source tools and high-performance systems built for scale.
                    </p>
                </div>
                <div className="hidden md:block">
                    <span className="text-xs font-mono text-zinc-500 px-3 py-1 border border-zinc-800 rounded-full">
                        {projects.length} PROJECTS
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsWithStats.map((item, i) => (
                    <div key={item.title} className={i === 0 || i === 3 ? "lg:col-span-2" : ""}>
                        <ProjectCard project={item} stats={item.stats} />
                    </div>
                ))}
            </div>
        </section>
    );
}
