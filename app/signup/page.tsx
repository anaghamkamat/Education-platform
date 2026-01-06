"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "@/lib/firebase"

export default function SignupPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const course = searchParams.get("course")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // 1️⃣ Create account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      // 2️⃣ Save name in Firebase Auth profile
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name,
        })
      }

      // 3️⃣ Redirect back
      if (course) {
        router.push(`/courses/${course}`)
      } else {
        router.push("/")
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md p-6 border border-border rounded-lg bg-background space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Create Account</h1>

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        {/* ✅ NAME */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground py-2 rounded font-semibold"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() =>
              router.push(course ? `/login?course=${course}` : "/login")
            }
            className="text-primary font-medium underline"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  )
}
