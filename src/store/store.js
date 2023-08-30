import { configureStore } from "@reduxjs/toolkit";
import { PostReducer } from "./PostsReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/RootSaga";
import { LoaderReducer } from "./LoaderReducer";
import { UserReducer } from "./UserReducer";

const sagaMdw = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        isLoading: LoaderReducer,
        posts: PostReducer,
        user: UserReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMdw)
})

sagaMdw.run(rootSaga)