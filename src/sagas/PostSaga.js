import { call, put, takeEvery} from "redux-saga/effects";
import API from "../API/PostService";
import { getPostsAction } from "../store/PostsReducer";

function* fetchPostsWorker() {
    const posts = yield call(API.getAllPosts)
    yield put(getPostsAction(posts.data))
}

export function* fetchPostsWatcher() {
    yield takeEvery("FETCH_POSTS",fetchPostsWorker)
}