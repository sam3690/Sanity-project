import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../sanity/sanity-utils";
import project from "../../sanity/schemas/project-schemas";
import { Project } from "../../types/Project";

export default async function Home() {
  const projects = await getProjects()
  return (
    <div>
      <h1 className="text-7xl font-extrabold drop-shadow-lg">Hello I am <span className="bg-gradient-to-r from-blue-600  to bg-green-500 bg-clip-text text-transparent drop-shadow-md">Usama</span>!</h1>
      <p className="mt-3 text-xl text-gray-600 drop-shadow-lg">Aloha everyone! check out my projects</p>
      <h2 className="mt-24 font-extrabold drop-shadow-lg text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
                {project.image && (
                  <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-fill max-h-[150px] rounded-lg drop-shadow-md"
                  />
                )}
                  <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md"> 
                    {project.name}
                  </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
