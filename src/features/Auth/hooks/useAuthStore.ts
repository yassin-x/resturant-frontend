import {
  useIsAuth,
  useIsClient,
  useIsOwner,
  useIsStaff,
  useIsUser,
  useLoading,
  useLoadUser,
  useSignin,
  useSignOut,
  useSignOutAll,
  useSignup,
  useUser,
} from "../store";

export function useAuth() {
  const user = useUser();
  const isAuth = useIsAuth();
  const loading = useLoading();
  const signIn = useSignin();
  const signUp = useSignup();
  const signOut = useSignOut();
  const signOutAll = useSignOutAll();
  const isUser = useIsUser();
  const isClient = useIsClient();
  const isStaff = useIsStaff();
  const isOwner = useIsOwner();
  const profile = useLoadUser();

  return {
    user,
    isAuth,
    loading,
    signIn,
    signUp,
    signOut,
    signOutAll,
    isUser,
    isClient,
    isStaff,
    isOwner,
    profile,
  };
}
