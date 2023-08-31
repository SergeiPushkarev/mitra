import { call, delay, put, takeEvery} from "@redux-saga/core/effects"
import API from "../API/PostService";
import { setUserAction, setUserPostAction } from "../store/UserReducer";
import { showLoader, hideLoader } from "../store/LoaderReducer";

function* getUserWorker(id) {
    const user = yield call(API.getUser,id.id)
    yield put(setUserAction(user.data))
}

function* getUserPostsWorker(userId) {
    yield put (showLoader())
    yield delay(3000)
    try {
        const userPosts = yield call(API.getUserPosts,userId.userId)
        yield put(setUserPostAction(userPosts.data))
    } catch (error) {
        console.log(error.message);
        yield put({type:'SET_USERPOSTSERROR', payload:`${error.message}`})
    }
    yield put (hideLoader())
}

export function* getUserWatcher() {
    yield takeEvery("GET_USER", getUserWorker)
    yield takeEvery("GET_USERPOSTS", getUserPostsWorker)
}