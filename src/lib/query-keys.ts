
export const authKeys = {
  all: ["auth"] as const,
  user: ()=> [...authKeys.all, "user"] as const,
  profile: ()=> [...authKeys.user(), "profile"] as const,
}

export const menuQueryKeys = {
  all: ["menuItems"] as const,
  lists: () => [...menuQueryKeys.all, "list"] as const,
  list : (id: string) => [...menuQueryKeys.lists(), id] as const,

  mutations: {
    create: () => [...menuQueryKeys.all, "create"] as const,
    update: (id: string) => [...menuQueryKeys.all, "update", id] as const,
    delete: (id: string) => [...menuQueryKeys.all, "delete", id] as const
  }
  
}