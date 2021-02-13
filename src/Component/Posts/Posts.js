import React, { Component } from "react";
import PostsData from "./PostsData";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: PostsData };
    }

    addPost = (e) => {
        // Prevents page from reloading
        e.preventDefault();

        // Name from input
        let name = document.forms["add"]["name"].value;

        // Address input with plus sign between spaces
        let address = document.forms["add"]["address"].value
            .split(" ")
            .join("+");
        // Description input
        let description = document.forms["add"]["description"].value;

        console.log("ALL VALUES", name, address, description);

        // Arr Copy to be joined with main state
        let arrCopy = this.state.posts;

        arrCopy.unshift({
            name: name,
            description: description,
            photo:
                "https://nmgprod.s3.amazonaws.com/media/files/60/48/6048b1e4d0b20d40eea243534785ed3f/cover_image_1582904889.jpg.760x400_q85_crop_upscale.jpg",
            link: `https://www.google.com/maps/place/${address}`,
        });

        console.log("Array copy", arrCopy);

        this.setState({
            posts: arrCopy,
        });
        // Empty fields
        document.forms["add"]["name"].value = "";
        address = document.forms["add"]["address"].value = "";
        document.forms["add"]["description"].value = "";
    };

    render() {
        return (
            <>
                <div id="posts-main-container">
                    <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
                        Add New Truck
                    </h2>
                    <form id="form" name="add" onSubmit={this.addPost}>
                        <div className="form-row ">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Food Truck Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Crusty Crab"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="1234 Main St"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    rows="3"
                                    placeholder="Add Description Here"
                                ></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
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
                                    <a
                                        className="posts-link"
                                        href={post.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Click for directions
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
