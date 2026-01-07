import dynamic from "next/dynamic"
import React, { Suspense } from "react"

const SignupClient = dynamic(() => import("./SignupClient"), { suspense: true })

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      {/* Client-only signup form (uses useSearchParams) */}
      <SignupClient />
    </Suspense>
  )
}
