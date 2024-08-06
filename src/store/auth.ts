import { Subject } from "rxjs";
import { useStore } from "./hooks/use-store";

interface UserInfo {
  name?: string;
}

const subject = new Subject();

const initialState: UserInfo = {};
let state = initialState;

export const authStore = {
  init: () => {
    subject.next(state);
  },
  subscribe: (setState: React.Dispatch<any>) => subject.subscribe(setState),
  setUserInfo: (userInfo: UserInfo) => {
    state = userInfo;
    subject.next(state);
  },
  clearAuthStore: () => {
    state = initialState;
    subject.next(state);
  },
  unsubscribe: () => {
    subject.unsubscribe();
  },
  initialState,
};

export const useAuthStore = () => useStore(authStore);
