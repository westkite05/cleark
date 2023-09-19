import Link from "next/link"
import React from "react"
import { resolve } from "styled-jsx/css"

const username = "bradtraversy"

async function fetchRepo(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(
    "https://api.github.com/repos/${username}/${name}"
  )
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  const username = "bradtraversy"
}

return (
  <div>
    <h3 className="text-xl font bold">
      <Link href={`https://github.com/${username}/${name}`}>{repo.name}</Link>
    </h3>
  </div>
)
