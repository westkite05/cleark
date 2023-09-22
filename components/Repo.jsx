import { githubUsername } from "@/constants/constants"
import Link from "next/link"
import React from "react"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

const username = githubUsername

async function fetchRepo(name) {
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  // 1. SSG : Static site generation
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}`
  )

  // 2. SSR : Server-side rendering
  // const response = await fetch(
  //   `https://api.github.com/repos/${username}/${name}`,
  //   {cache: 'no-store'}
  // )

  // 3. ISR : Incremental Static Generation
  // const response = await fetch(
  //   `https://api.github.com/repos/${username}/${name}`,
  //   { next: { revalidate: 60 } }
  // )
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  return (
    <div>
      <h3 className="text-xl font-bold">
        <Link href={`https://github.com/${username}/${name}`}>{repo.name}</Link>{" "}
      </h3>
      <p>{repo.description}</p>
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-1">
          <FaStar />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FaCodeBranch />
          {repo.forks_count}
        </span>
        <span className="flex items-center gap-1">
          <FaEye />
          {repo.watchers_count}
        </span>
      </div>
    </div>
  )
}

export default Repo
