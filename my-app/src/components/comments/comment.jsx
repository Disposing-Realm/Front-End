import { React, useContext, useState, useEffect } from "react";
import "./comments.css";
export default function Comments(props) {

  return (
    <>
      <div className="comments-section">
        <div className="comment-box">
          <div className="commenter-name">
            <p className="username-text">
              {props.userInfo && props.userInfo.username}
              <br />
            </p>
          </div>
          <div className="commenter-comment">
            <p className="commenter-comment-text">{props.comments}</p>
          </div>
        </div>
      </div>
    </>
  );
}
