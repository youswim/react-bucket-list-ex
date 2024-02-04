import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // url 파라미터에 넘겨준 index를 받아오는 부분
  const bucket_index = parseInt(useParams().index);

  // 리덕스 스토어에서 데이터를 가져오는 부분
  const bucket_list = useSelector((state) => state.bucket.list);
  console.log(bucket_list, props, bucket_index);
  // bucket_index 번째의 bukcet_list를 반환하는 부분
  return (
    <div>
      <h1>{bucket_list[bucket_index]}</h1>
      <button
        onClick={() => {
          // dispatch(); <- 괄호 안에는 액션 생성 함수가 들어가야겠죠?
          // 예를 들면 이렇게요.
          dispatch(deleteBucket(bucket_index));
          navigate(-1);
        }}>
        삭제하기
      </button>
    </div>
  );
};

export default Detail;
