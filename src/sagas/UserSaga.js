import { call, delay, put, takeEvery} from "@redux-saga/core/effects"
import API from "../API/PostService";
import { setUserAction, setUserPostAction } from "../store/UserReducer";
import { showLoader, hideLoader } from "../store/LoaderReducer";

function* getUserWorker(id) {
    const user = yield call(API.getUser,id.id)
    console.log(user);
    yield put(setUserAction(user.data))
}

function* getUserPostsWorker(userId) {
    yield put (showLoader())
    yield delay(3000)
    const userPosts = yield call(API.getUserPosts,userId.userId)
    yield put(setUserPostAction(userPosts.data))
    yield put (hideLoader())
}

export function* getUserWatcher() {
    yield takeEvery("GET_USER", getUserWorker)
    yield takeEvery("GET_USERPOSTS", getUserPostsWorker)
}