import { call, put, delay, select, all, fork, takeEvery, take} from "redux-saga/effects";
import API from "../API/PostService";
import { setPostsAction, hideLoader, showLoader, setTotalPagesAction, setPageAction } from "../store/PostsReducer";


function* getPostsWorker() {
    yield put (showLoader())
    yield delay(3000)
    const page = yield select(s => s.posts.page)
    const limit = yield select(s => s.posts.limit)
    const posts = yield call(API.getLimitPosts, limit,page)
    yield put(setPostsAction(posts.data))
    yield put (hideLoader())
    return posts
}

function* setTotalPageWorker(posts) {
    const limit = yield select(s => s.posts.limit)
    const totalPages = yield call(()=> Math.ceil(posts.headers['x-total-count']/limit))
    yield put (setTotalPagesAction(totalPages))
}
function* changePageWorker(page) {
    yield put(setPageAction(page.page))
    console.log(page.page);
    yield getPostsWorker()
}

function* changePageWatcher() {
    yield takeEvery("CHANGE_PAGE",changePageWorker)
}

function* startup() {
    const posts = yield getPostsWorker()
    yield setTotalPageWorker(posts)
}

export function* rootSaga() {
    yield all([fork(startup),
        fork(changePageWatcher)
    ])
}