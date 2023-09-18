import { UserProfile } from "@clerk/nextjs"
import React from "react"

function profilePage() {
  return (
    <div>
      <UserProfile />
    </div>
  )
}

export default profilePage
