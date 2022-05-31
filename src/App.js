import './App.css';
import { useState } from 'react';

function App() {
    let [postName, setPostName] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
    let [like, setLike] = useState([0, 0, 0]);

    function clickLike(index) {
        let likeTemp = like.slice();
        likeTemp[index] = likeTemp[index] + 1;
        setLike(likeTemp);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
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
                <span className="like"> {like[1]} </span>ㄱ
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
        </div>
    );
}

export default App;
