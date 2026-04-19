export async function getProjects() {
  const GIST_URL = 'https://gist.githubusercontent.com/indiser/7a264723890c6818f8d7e88b122287da/raw/projects.json';
  
  const response = await fetch(GIST_URL, {
    next: { revalidate: 3600 }
  });
  
  return response.json();
}

export type Project = {
  title: string;
  repoName: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
};
