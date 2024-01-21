import React from "react"
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Detail = (props) => {
    // url 파라미터에 넘겨준 index를 받아오는 부분
    const bucket_index = parseInt(useParams().index);

    // 리덕스 스토어에서 데이터를 가져오는 부분
    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(bucket_list, props, bucket_index);
    // bucket_index 번째의 bukcet_list를 반환하는 부분
    return (<h1>{bucket_list[bucket_index]}</h1>);
}

export default Detail;