import "./BlogSection.css";
import blogs from "./blogData";

import { FaRegCommentDots } from "react-icons/fa";

function BlogSection() {
  return (
    <section className="blogSection">

      <div className="blogContainer">

        {/* Heading */}

        <div className="blogHeading">

          <span className="blogSubTitle">
            FROM THE BLOG
          </span>

          <h2 className="blogTitle">
            Recently Our Posts
          </h2>

          <p className="blogDescription">
            Sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>

        </div>

        {/* Blog Content */}

        <div className="blogContent">

          {/* Left Featured Blog */}

          <div className="featuredBlog">

            <img
              src={blogs[0].image}
              alt={blogs[0].title}
            />

            <div className="featuredOverlay">

              <div className="blogMeta">

                <span>{blogs[0].date}</span>

                <span>
                  <FaRegCommentDots />
                  {blogs[0].comments}
                </span>

              </div>

              <h3>
                {blogs[0].title}
              </h3>

            </div>

          </div>

          {/* Right Blogs */}

          <div className="sideBlogs">

            {blogs.slice(1).map((blog) => (

              <div
                className="sideBlogCard"
                key={blog.id}
              >

                <div className="sideImage">

                  <img
                    src={blog.image}
                    alt={blog.title}
                  />

                </div>

                <div className="sideContent">

                  <div className="blogMeta">

                    <span>{blog.date}</span>

                    <span>
                      <FaRegCommentDots />
                      {blog.comments}
                    </span>

                  </div>

                  <h4>
                    {blog.title}
                  </h4>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default BlogSection;