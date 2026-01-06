// utils/requireAuth.ts
import { User } from "firebase/auth"

export const requireAuth = (
  user: User | null,
  router: any,
  redirect = "/signup"
) => {
  if (!user) {
    router.push(redirect)
    return false
  }
  return true
}
