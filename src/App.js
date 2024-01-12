import React from "react";
import { Routes, Route, useParams, Link, useNavigate } from "react-router-dom";
import logo from "./logo.svg";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
// import "./style.css";
import "./scss_ex.scss";
import styled from "styled-components";

import Detail from "./Detail";
import NotFound from "./NotFound";

import { connect } from "react-redux";
import { loadBucket, createBucket } from "./redux/modules/bucket";

const mapStateTopProps = (state) => ({
  bucket_list: state.bucket.list,
})

const mapDispatchToProps = (dispatch) => ({
  load: ()=>{
    dispatch(loadBucket());
  },
  create: (new_item) => {
    dispatch(createBucket(new_item));
  }
});

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
    this.text = React.createRef();
  }

  componentDidMount() {
    console.log("this.text:");
    console.log(this.text);
    console.log("this.text.current:");
    console.log(this.text.current);
    console.log("this.props");
    console.log(this.props);
  }

  addBucketList = () => {
    let list = this.state.list;
    const new_item = this.text.current.value;
    this.setState({ list: [...list, new_item] });
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.
    console.log(this.state);
    return (
      <div className="App">
        <MyContainer>
          <MyTitle>내 버킷리스트</MyTitle>
          <MyLine />
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <Routes>
            <Route path="/" element={<BucketList list={this.state.list} />}/>
            <Route path="/detail" element={<Detail/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </MyContainer>

        <MyList>
          <input type="text" ref={this.text}></input>
          <button onClick={this.addBucketList}>추가하기</button>
        </MyList>
      </div>
    );
  }
}

const MyApp = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #eee;
  padding: 32px;
  box-sizing: border-box;
`;

const MyContainer = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const MyList = styled.div`
  max-width: 350px;
  min-height: 20vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const MyTitle = styled.h1`
  color: slateblue;
  text-align: center;
`;

const MyLine = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default connect(mapStateTopProps, mapDispatchToProps)(App);
