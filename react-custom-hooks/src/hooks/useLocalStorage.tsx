import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initial_value: string) {
  const [value, setValue] = useState(() => {
    const saved_value = localStorage.getItem(key);
    return saved_value ? JSON.parse(saved_value) : initial_value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(initial_value));
  }, [initial_value, key]);

  return [value, setValue];
}
