import { projects } from "@/data/projects";
import { getRepoStats } from "@/lib/github";
import ProjectCard from "./ProjectCard";

export default async function WorkGrid() {
  const projectsWithStats = await Promise.all(
    projects.map(async (project) => {
      const stats = await getRepoStats(project.repoName);
      return { ...project, stats };
    })
  );

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span
              className="text-[11px] font-medium tracking-[0.2em] uppercase mb-3 block"
              style={{ color: "rgba(201,169,110,0.6)" }}
            >
              Portfolio
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-foreground/95"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Selected Work
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md text-[15px] leading-relaxed">
              Open-source tools and engineered systems, built for performance
              and scale.
            </p>
          </div>
          <span
            className="text-[11px] font-mono tracking-wider px-3 py-1.5 rounded-lg hidden md:block"
            style={{
              color: "rgba(201,169,110,0.5)",
              background: "rgba(201,169,110,0.05)",
              border: "1px solid rgba(201,169,110,0.08)",
            }}
          >
            {projects.length} PROJECTS
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsWithStats.map((item, i) => (
            <div
              key={item.title}
              className={i === 0 || i === 3 ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={item} stats={item.stats} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
