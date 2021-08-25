import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import ProfileStore from "./profileStore";
import CommentStore from "./commentStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import UserStore from "./userStore";

interface Store {
    activityStore: ActivityStore;
    profileStore: ProfileStore;
    commentStore: CommentStore;
    commonStore: CommonStore;
    modalStore: ModalStore;
    userStore: UserStore;

}

export const store: Store = {
    activityStore: new ActivityStore(),
    profileStore: new ProfileStore(),
    commentStore: new CommentStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore(),
    userStore: new UserStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}