import { call, put, delay, select, takeEvery} from "redux-saga/effects";
import API from "../API/PostService";
import { setPostsAction, setTotalPagesAction, setPageAction } from "../store/PostsReducer";
import { showLoader, hideLoader } from "../store/LoaderReducer";


export function* getPostsWorker() {
    yield put (showLoader())
    yield delay(3000)
    const page = yield select(s => s.posts.page)
    const limit = yield select(s => s.posts.limit)
    const posts = yield call(API.getLimitPosts, limit,page)
    yield put(setPostsAction(posts.data))
    yield put (hideLoader())
    return posts
}

export function* setTotalPageWorker(posts) {
    const limit = yield select(s => s.posts.limit)
    const totalPages = yield call(()=> Math.ceil(posts.headers['x-total-count']/limit))
    yield put (setTotalPagesAction(totalPages))
}
function* changePageWorker(page) {
    yield put(setPageAction(page.page))
    console.log(page.page);
    yield getPostsWorker()
}

export function* changePageWatcher() {
    yield takeEvery("CHANGE_PAGE",changePageWorker)
}