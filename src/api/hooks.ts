// src/api/hooks.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProfile, fetchPosts, UserProfile } from "./endpoints";

export const useProfile = () =>
  useQuery<UserProfile, Error>({
    queryKey: ["profile"],
    queryFn: fetchProfile,
    staleTime: 1000 * 60 * 5,  // cache 5 minutes
  });

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

