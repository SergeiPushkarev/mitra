import { call, put, delay, takeEvery } from "redux-saga/effects";
import API from "../API/PostService";
import { delComErr, delComm, GET_COMM, loadEnd, loadStart, setComErr, setComm } from "../store/CommentReducer";

function* getCommWorker(id) {
    yield put(loadStart(id.id))
    yield put(delComm(id.id))
    yield put(delComErr(id.id))
    yield delay(3000)
    try {
        const comments = yield call(API.getComments, id.id)
        yield put(setComm(comments.data))
    } catch (error) {
        yield put(setComErr({id:id.id, error:error.message}))
    }
    yield put(loadEnd())
}

export function* getCommWatcher() {
    yield takeEvery(GET_COMM, getCommWorker)
}