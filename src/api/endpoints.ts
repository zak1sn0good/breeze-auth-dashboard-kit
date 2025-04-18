// src/api/endpoints.ts
import { api } from "./client";

export interface UserProfile {
  id: string;
  email: string;
  name: string;
}

export const fetchProfile = async (): Promise<UserProfile> => {
  const { data } = await api.get("/user/profile");
  return data;
};

export const fetchPosts = async () => {
  const { data } = await api.get("/posts");
  return data as Array<{ id: string; title: string }>;
};

export const createPost = async (payload: { title: string; body: string }) => {
  const { data } = await api.post("/posts", payload);
  return data;
};

