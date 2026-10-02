import { takeLatest, put, all, call } from "redux-saga/effects";
import { signinSuccess, signinFailure } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";
import { getCurrentUser, createUserDocumentFromAuth } from "../../utlis/firebase.utils";

export function* getUserSnapshotFromAuth (userData, additionalDetails) {
  try {
    const userSnapShot = yield call(createUserDocumentFromAuth, userData, additionalDetails)
    yield put(signinSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
  } catch (error) {
    yield put(signinFailure(error))
  }
}

export function* isUserAuthenticated () {
  try {
    const userAuth = yield call(getCurrentUser)
    if(!userAuth) return;
    yield call(getUserSnapshotFromAuth, userAuth)
  } catch (error) {
    yield put(signinFailure(error))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas( ){
  yield all([call(onCheckUserSession)])
}