import { githubUsername } from "@/constants/constants"
import Link from "next/link"
import React from "react"

const username = githubUsername

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`
  )
  const contents = await response.json()
  return contents
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type === "dir")

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li>
            <Link href={dir.html_url} className="underline">
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoDirs
