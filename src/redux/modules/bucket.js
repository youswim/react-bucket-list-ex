
// Actions
// 버킷리스트에는 두가지 기능이 있다.
// 1. 버킷리스트 목록을 화면에 로드하는 기능
// 2. 사용자가 버킷리스트 목록을 추가할 수 있는 기능
const LOAD = "bucket/LOAD"; // Action이름은 대문자. module이름은 소문자
const CREATE = "bucket/CREATE";

// initialState
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
  };

// Action Creators
// 컴포넌트에서 불러올 수 있어야 Action을 수행할 수 있다.
// 따라서 export 키워드 추가
// export default는 중괄호 없이 불러올 수 있다
// import React from "react"
// export에 default가 없다면, 중괄호를 추가해야 불러올 수 있다
// import {Router} from "react-router-dom"
export const loadBucket = (bucket) => {
    return {type: LOAD, bucket};
}

// 데이터를 추가하려면, 뭘 추가하려는지에 대한 정보는 필요하다.
export const createBucket = (bucket) => {
    return {type: CREATE, bucket}
}



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD": {
        // 초기값을 그대로 화면에 Load하면 되므로,
        // initialState를 넣어준 state를 그대로 반환한다.
        return state;
    }
    case "bucket/CREATE": {
        // 새로운 항목을 만들어야 한다.
        // 1. 텍스트를 받아와서 새 배열을 만들고,
        // 2. 어떤 딕셔너리의에 새 배열을 넣어줘야 한다.
        const new_bucket_list = [...state.list, action.bucket];
        return {list: new_bucket_list};
    }
  }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget() {
  return (dispatch) =>
    get("/widget").then((widget) => dispatch(updateWidget(widget)));
}
