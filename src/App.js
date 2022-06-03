import './App.css';
import { useState } from 'react';

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

function App() {
    let [postName, setPostName] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
    let [like, setLike] = useState([0, 0, 0]);

    function clickLike(index) {
        let likeTemp = [...like];
        likeTemp[index] = likeTemp[index] + 1;
        setLike(likeTemp);
    }

    function clickEdit() {
        let postNameTemp = [...postName];
        postNameTemp[0] = '여자 코트 추천';
        setPostName(postNameTemp);
    }

    function sortPost() {
        let postNameTemp = [...postName];
        postNameTemp.sort();
        setPostName(postNameTemp);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>

            <button
                onClick={() => {
                    clickEdit();
                }}>
                글수정
            </button>

            <button
                onClick={() => {
                    sortPost();
                }}>
                글정렬
            </button>

            <div className="list 0">
                <h4>{postName[0]}</h4>
                <span
                    className="likeButton"
                    onClick={() => {
                        clickLike(0);
                    }}>
                    👍
                </span>
                <span className="like"> {like[0]} </span>
                <p>2월 17일 발행</p>
            </div>
            <div className="list 1">
                <h4>{postName[1]}</h4>
                <span
                    className="likeButton"
                    onClick={() => {
                        clickLike(1);
                    }}>
                    👍
                </span>
                <span className="like"> {like[1]} </span>
                <p>2월 17일 발행</p>
            </div>
            <div className="list 2">
                <h4>{postName[2]}</h4>
                <span
                    className="likeButton"
                    onClick={() => {
                        clickLike(2);
                    }}>
                    👍
                </span>
                <span className="like"> {like[2]} </span>
                <p>2월 17일 발행</p>
            </div>

            <Modal></Modal>
        </div>
    );
}

export default App;
