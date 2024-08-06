import { useLayoutEffect, useState } from "react";

export const useStore = <
  T extends {
    subscribe: (dispatcher: React.Dispatch<any>) => void;
    init: () => void;
    initialState: D;
    unsubscribe: () => void;
  },
  D,
>(
  store: T
) => {
  const [state, setState] = useState<T["initialState"]>(store.initialState);

  useLayoutEffect(() => {
    store.subscribe(setState);
    store.init();
  }, [store]);

  return {
    ...store,
    state,
  };
};
