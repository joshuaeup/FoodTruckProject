import React, { Component } from "react";
import PostsData from "./PostsData";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: PostsData };
    }

    addPost = () => {};

    render() {
        return (
            <>
                <div className="posts-main-container">
                    {/* <form onSubmit={this.addPost}>
                        <input placeholder="Add Post" />
                        <input type="submit" />
                    </form> */}
                    {this.state.posts.map((post, index) => {
                        return (
                            <div className="posts-container" key={index}>
                                <section className="posts-container__text">
                                    <h2 className="posts-title">
                                        {post.name} Food Truck
                                    </h2>
                                    <p className="posts-body">
                                        {post.description}
                                    </p>
                                    <a className="posts-link" href={post.link}>
                                        {post.linkText}
                                    </a>
                                </section>
                                <section className="posts-container__image">
                                    <img
                                        className="posts-img"
                                        alt="food truck"
                                        src={post.photo}
                                    />
                                </section>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default Posts;
