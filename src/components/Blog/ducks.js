import { fork, put, call, takeLatest } from 'redux-saga/effects';
import { callApi, createAction, logger } from 'dorothy/utils';

export const ADD_TAG_REQUEST = 'ADD_TAG_REQUEST';
export const ADD_TAG_RESPONSE = 'ADD_TAG_RESPONSE';
export const ADD_TAG_ERROR = 'ADD_TAG_ERROR';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_RESPONSE = 'ADD_POST_RESPONSE';
export const ADD_POST_ERROR = 'ADD_POST_ERROR';

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_RESPONSE = 'EDIT_POST_RESPONSE';
export const EDIT_POST_ERROR = 'EDIT_POST_ERROR';

export const GET_ALL_POST_REQUEST = 'GET_ALL_POST_REQUEST';
export const GET_ALL_POST_RESPONSE = 'GET_ALL_POST_RESPONSE';
export const GET_ALL_POST_ERROR = 'GET_ALL_POST_ERROR';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_RESPONSE = 'REMOVE_POST_RESPONSE';
export const REMOVE_POST_ERROR = 'REMOVE_POST_ERROR';

export const REMOVE_TAG_REQUEST = 'REMOVE_TAG_REQUEST';
export const REMOVE_TAG_RESPONSE = 'REMOVE_TAG_RESPONSE';
export const REMOVE_TAG_ERROR = 'REMOVE_TAG_ERROR';

/* handler state for add tag */
function* requestAddTag(action) {
  try {
    const response = yield call(
      callApi,
      'POST',
      `${process.env.REACT_APP_BASE_URL}api/setting/addTag`,
      action.payload,
    );
    yield put(createAction(ADD_TAG_RESPONSE, response.data));
  } catch (error) {
    logger.loggerError('Add tag went wrong!');
    yield put(createAction(ADD_TAG_ERROR, error));
  }
}
function* watchAddTagRequest() {
  yield takeLatest(ADD_TAG_REQUEST, requestAddTag);
}
export const addTagSaga = [fork(watchAddTagRequest)];

/* handler state for add post */
function* requestAddPost(action) {
  try {
    const response = yield call(
      callApi,
      'POST',
      `${process.env.REACT_APP_BASE_URL}api/post/add`,
      action.payload,
    );
    yield put(createAction(ADD_POST_RESPONSE, response.data));
  } catch (error) {
    logger.loggerError('Add post went wrong!');
    yield put(createAction(ADD_POST_ERROR, error));
  }
}
function* watchAddPostRequest() {
  yield takeLatest(ADD_POST_REQUEST, requestAddPost);
}
export const addPostSaga = [fork(watchAddPostRequest)];

/* handler state for remove tag */
function* requestRemoveTag(action) {
  try {
    const response = yield call(
      callApi,
      'POST',
      `${process.env.REACT_APP_BASE_URL}api/setting/removeTag`,
      action.payload,
    );
    yield put(createAction(REMOVE_TAG_RESPONSE, response.data));
  } catch (error) {
    yield put(createAction(REMOVE_TAG_ERROR, error));
  }
}
function* watchRemoveTagRequest() {
  yield takeLatest(REMOVE_TAG_REQUEST, requestRemoveTag);
}
export const removeTagSaga = [fork(watchRemoveTagRequest)];

/* handler state for get all post */
function* requestGetALlPost() {
  try {
    const response = yield call(callApi, 'get', `${process.env.REACT_APP_BASE_URL}api/post`);
    yield put(createAction(GET_ALL_POST_RESPONSE, response.data));
  } catch (error) {
    yield put(createAction(GET_ALL_POST_ERROR, error));
  }
}
function* watchGetAllPostRequest() {
  yield takeLatest(GET_ALL_POST_REQUEST, requestGetALlPost);
}
export const getAllPostSaga = [fork(watchGetAllPostRequest)];

/* handler state for get all post */
function* requestRemovePost(action) {
  try {
    const response = yield call(
      callApi,
      'post',
      `${process.env.REACT_APP_BASE_URL}api/post/remove`,
      action.payload,
    );
    yield put(createAction(REMOVE_POST_RESPONSE, response.data));
  } catch (error) {
    yield put(createAction(REMOVE_POST_ERROR, error));
  }
}
function* watchRemovePostRequest() {
  yield takeLatest(REMOVE_POST_REQUEST, requestRemovePost);
}
export const removePostSaga = [fork(watchRemovePostRequest)];

/* handler state for edit post */
function* requestEditPost(action) {
  try {
    const response = yield call(
      callApi,
      'post',
      `${process.env.REACT_APP_BASE_URL}api/post/edit`,
      action.payload,
    );
    yield put(createAction(EDIT_POST_RESPONSE, response.data));
  } catch (error) {
    yield put(createAction(EDIT_POST_ERROR, error));
  }
}
function* watchEditPostRequest() {
  yield takeLatest(EDIT_POST_REQUEST, requestEditPost);
}
export const editPostSaga = [fork(watchEditPostRequest)];
