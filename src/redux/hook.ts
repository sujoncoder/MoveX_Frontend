import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./store"
import { userApi } from "./api/userApi"


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

// Re-export the generated hooks for convenience
export const { useLoginMutation, useRegisterMutation } = userApi