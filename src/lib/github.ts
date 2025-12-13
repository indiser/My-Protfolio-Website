
interface RepoStats {
    stars: number;
    forks: number;
}

export async function getRepoStats(repoName: string): Promise<RepoStats> {
    try {
        const res = await fetch(`https://api.github.com/repos/${repoName}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });

        if (!res.ok) {
            console.warn(`Failed to fetch stats for ${repoName}: ${res.statusText}`);
            return { stars: 0, forks: 0 };
        }

        const data = await res.json();
        return {
            stars: data.stargazers_count,
            forks: data.forks_count,
        };
    } catch (error) {
        console.warn(`Error fetching stats for ${repoName}:`, error);
        return { stars: 0, forks: 0 };
    }
}
