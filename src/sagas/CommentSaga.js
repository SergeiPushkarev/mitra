import { call, put, delay, takeEvery } from "redux-saga/effects";
import API from "../API/PostService";
import { GET_COMM, loadEnd, loadStart, setComm } from "../store/CommentReducer";

function* getCommWorker(id) {
    yield put(loadStart(id.id))
    yield delay(3000)
    try {
        const comments = yield call(API.getComments, id.id)
        yield put(setComm(comments.data))
        yield put(loadEnd())
    } catch (error) {
        
    }
}

export function* getCommWatcher() {
    yield takeEvery(GET_COMM, getCommWorker)
}