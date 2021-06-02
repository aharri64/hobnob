import { makeObservable, observable } from "mobx";


export default class ActivityStore {
    title = 'Hello fromMobX!';

    constructor() {
        makeObservable(this, {
            title: observable
        })
    }
}