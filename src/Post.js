import React from 'react';
import "./Post.css"

function Post({ state }) {

    return (
        <div className="post">
            <div class="post__card">
                <img src="https://i.ibb.co/YjrGYLW/Capture.jpg" class="post__cardImage" alt="..." />
                <div class="post__cardBody">
                    <h2 class="cardBody__title">{state.title}</h2>
                    <p class="cardBody__text">{state.des}</p>
                </div>
                <ul class="post__list">
                    <li class="post__listItem">Experience = {state.exp} years</li>
                    <li class="post__listItem">Skills = {state.skills}</li>
                    <li class="post__listItem">Remote = {state.remote}</li>
                    <li class="post__listItem">CTC = {state.ctc} LPA</li>
                    <li class="post__listItem">Job Type = {state.etype}</li>
                    <li class="post__listItem">Batch Eligible = {state.year}</li>
                    <li class="post__listItem">Location = {state.city + ", " + state.state + ", " + state.zip}</li>
                </ul>
            </div>
        </div>
    );
}

export default Post;
