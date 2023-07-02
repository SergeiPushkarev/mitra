import { call, put, takeEvery} from "redux-saga/effects";
import API from "../API/PostService";
import { getPostsAction, hideLoader, showLoader } from "../store/PostsReducer";

const delay = (ms)=> new Promise( resolve => setTimeout(resolve, ms))

function* fetchPostsWorker() {
    yield put (showLoader())
    yield delay(3000)
    const posts = yield call(API.getAllPosts)
    yield put(getPostsAction(posts.data))
    yield put (hideLoader())
}

export function* fetchPostsWatcher() {
    yield takeEvery("FETCH_POSTS",fetchPostsWorker)
}