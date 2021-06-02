import { makeAutoObservable } from "mobx";


export default class ActivityStore {
    title = 'Hello fromMobX!';

    constructor() {
        makeAutoObservable(this)
    }

    setTitle = () => {
        this.title = this.title + '!';
    }
}