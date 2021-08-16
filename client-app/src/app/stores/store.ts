import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import ProfileStore from "./profileStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import UserStore from "./userStore";

interface Store {
    activityStore: ActivityStore;
    profileStore: ProfileStore;
    commonStore: CommonStore;
    modalStore: ModalStore;
    userStore: UserStore;

}

export const store: Store = {
    activityStore: new ActivityStore(),
    profileStore: new ProfileStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore(),
    userStore: new UserStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}