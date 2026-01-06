"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, email, password)

    const params = new URLSearchParams(window.location.search)
    const redirect = params.get("redirect") || "/"

    router.push(redirect)
  }

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="w-full bg-primary text-primary-foreground py-2 rounded">
        Login & Continue
      </button>
    </form>
  )
}
