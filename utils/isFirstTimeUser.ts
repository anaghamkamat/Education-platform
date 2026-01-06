// utils/isFirstTimeUser.ts
import { User } from "firebase/auth"

export const isFirstTimeUser = (user: User | null) => {
  if (!user) return false
  return user.metadata.creationTime === user.metadata.lastSignInTime
}
