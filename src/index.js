import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import "@/main";
import "./style";
import "./style.scss";
import codeImg from "./assets/code.png";
console.log("hello world");

const onClick = () => {
  axios.get("/api/list").then((res) => {
    console.log(res);
  });
};

const ele = (
  <div className="test">
    <h1>hello wold</h1>
    <img src={codeImg} />
    <button onClick={onClick}>请求接口</button>
  </div>
);

ReactDom.render(ele, document.getElementById("root"));
