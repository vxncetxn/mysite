import { useEffect } from "react";
import { randomizeElements } from "./randomizeElements";

export function useRandomize() {
  useEffect(() => {
    if (!window.history.state.previousLocation.length) {
      randomizeElements();
    }
  }, []);
}
