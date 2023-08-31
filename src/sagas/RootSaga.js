import { all, fork } from "redux-saga/effects";
import { changePageWatcher, getPostsWorker, setTotalPageWorker } from "./PostSaga";
import { getUserWatcher } from "./UserSaga";

function* startup() {
    const posts = yield getPostsWorker()
    if (posts) {
        yield setTotalPageWorker(posts)
    }
}

export function* rootSaga() {
    yield all([fork(startup),
        fork(changePageWatcher),
        fork(getUserWatcher)
    ])
}