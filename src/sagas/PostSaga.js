import { call, put, delay, select, all, fork} from "redux-saga/effects";
import API from "../API/PostService";
import { setPostsAction, hideLoader, showLoader, setTotalPagesAction } from "../store/PostsReducer";

function* getPostsWorker() {
    yield put (showLoader())
    yield delay(3000)
    const page = yield select(s => s.posts.page)
    const limit = yield select(s => s.posts.limit)
    const posts = yield call(API.getLimitPosts, limit,page)
    yield put(setPostsAction(posts.data))
    yield put (hideLoader())
}

function* setTotalPageWorker() {
    yield put (showLoader())
    yield delay(3000)
    const page = yield select(s => s.posts.page)
    const limit = yield select(s => s.posts.limit)
    const posts = yield call(API.getLimitPosts, limit,page)
    const totalPages = yield call(()=> Math.ceil(posts.headers['x-total-count']/limit))
    yield put (setTotalPagesAction(totalPages))
    yield put(setPostsAction(posts.data))
    yield put (hideLoader())
}

function* startup() {
    yield setTotalPageWorker()
}

export function* rootSaga() {
    yield all (
        [fork(startup)]
    )
}