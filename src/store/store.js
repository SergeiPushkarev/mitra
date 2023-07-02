import { configureStore } from "@reduxjs/toolkit";
import { PostReducer } from "./PostsReducer";
import createSagaMiddleware from "redux-saga";
import { fetchPostsWatcher } from "../sagas/PostSaga";

const sagaMdw = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        posts: PostReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMdw)
})

sagaMdw.run(fetchPostsWatcher)