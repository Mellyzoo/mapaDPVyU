import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);

  // Llama a 'reset' cuando cambian las dependencias
  useEffect(reset, [...dependencies, reset]);

  // Llama a 'clear' cuando se desmonta el componente o cambian las dependencias
  useEffect(() => clear, [clear]);
}
