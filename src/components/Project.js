import React,{useEffect, useState } from "react";
import sanityClient  from "../client.js";

export default function Project(){
    const [projectData , setProjectData] = useState(null);
    useEffect(() => {
     sanityClient.fetch(`*[_type=="project"]{
        title,
        date,
        palce,
        description,
        projectType,
        link,
        tags
     }`)
     .then((data)=>setProjectData(data))
     .catch(console.error);
    },[]);
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My projects</h1>
                <h2 className="text-lg text-grey-600 flex justify-center mb-12">Welcome to my projects page</h2>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap 8">
                    {projectData && projectData.map((project,index)=>(
                        <article className="relative rounded-lg shadow-xl bg-white p-16 m-2">
                        <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel ="noopener noreferrer">{project.title}</a>
                        </h3>
                        <div className="text-grey-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">
                                   Finished On 
                                </strong>:{" "} {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                            <strong className="font-bold">
                                   Company
                                </strong>:{" "} {project.place}
                            </span>
                            <span>
                            <strong className="font-bold">
                                   Type
                                </strong>:{" "}{project.projectType}
                            </span>
                            <p className="my-6 text-lg text-grey-700 leading-relaxed">{project.description}</p>
                            <a href={project.link} alt={project.title}
                            target="_blank"
                            rel ="noopener noreferrer" 
                            className="text-red-500 font-bold hover:underline hover:text-red-400">
                                View the project{" "}
                            <span role="img" aria-label="right pointer">
                            👉
                            </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}
