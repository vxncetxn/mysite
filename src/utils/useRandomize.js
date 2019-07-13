import { useEffect } from "react";
import { randomizeElements } from "./randomizeElements";
import { window } from "browser-monads";

export function useRandomize() {
  useEffect(() => {
    if (!window.history.state.previousLocation.length) {
      randomizeElements();
    }
  }, []);
}
