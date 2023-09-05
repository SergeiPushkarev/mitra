import { call, delay, put, takeEvery, select} from "@redux-saga/core/effects"
import API from "../API/PostService";
import { setUserAction, setUserPostAction } from "../store/UserReducer";
import { showLoader, hideLoader } from "../store/LoaderReducer";

function* getUserWorker(id) {
    try {
        const user = yield call(API.getUser,id.id)
        yield put(setUserAction(user.data))
    } catch (error) {
        yield put({type:'SET_USERERROR', payload:`${error.message}`})
    }
}

function* getUserPostsWorker(userId) {
    yield put (showLoader())
    yield delay(3000)
    try {
        const userPosts = yield call(API.getUserPosts,userId.id)
        console.log(userPosts);
        yield put(setUserPostAction(userPosts.data))
    } catch (error) {
        console.log(error.message);
        yield put({type:'SET_USERPOSTSERROR', payload:`${error.message}`})
    }
    yield put (hideLoader())
}

function* getUserInfoWorker(id) {
    yield call(getUserWorker,id)
    const error = yield select(s => s.user.userError)
    if (!error) yield call(getUserPostsWorker,id)
}

export function* getUserWatcher() {
    yield takeEvery("GET_USER",getUserInfoWorker)
}