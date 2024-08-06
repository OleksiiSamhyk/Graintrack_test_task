import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { loginUser } from "../../mockServer";
import { useAuthStore } from "../store/auth";

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  const { setUserInfo } = useAuthStore();

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    e.preventDefault();
    const target = e.target as EventTarget & { value: string }[];
    const name = target[0].value;
    const password = target[1].value;

    try {
      const res = await loginUser(name, password);
      setUserInfo(res);

      // this hack here to make navigate work sync after setUserInfo
      setTimeout(async () => {
        await navigate({ to: "/" });
      }, 0);
    } catch (err) {
      const errorMessage = (err as Error).message;
      setError(errorMessage);
    }
    setIsLoading(false);
  }

  return {
    error,
    isLoading,
    handleFormSubmit,
  };
};
