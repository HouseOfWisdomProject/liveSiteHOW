import Image from "next/image";

const { useState } = require("react")

const BlogCard = ({ post }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);

    return (
        <div className="grid grid-cols-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <button
            className="transition-transform duration-200 transform hover:scale-105"
            onClick={handleOpenPopup}
        >
            <div className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <h4 className="text-l text-gray-400 mb-2">
                    {post.subtitle}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {post.date}
                </p>
              </div>
            </div>
        </button>

        {/* Popup Window */}
        {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 py-10">
                      <div className="bg-white p-6 shadow-2xl max-w-2xl w-full overflow-y-auto max-h-screen">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-bold text-gray-800 mx-auto">
                            {post.title}
                          </h4>
                          <button
                            onClick={handleClosePopup}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            ✕
                          </button>
                        </div>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={500}
                          height={300}
                          className="rounded-lg shadow-md mb-4 mx-auto"
                          style={{ objectFit: "cover" }}
                        />
                        <p className="text-gray-700 text-justify">{post.caption}</p>
                        <p className = "text-orange-700 text-left text-s py-3">For more information, please contact Danya Allsh at danyaa@thehouseofwisdomofwa.org</p>
                      </div>
                    </div>
        )}
        </div>
    )
}

const Blog = ({ posts }) => {
    return (
        <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-lg text-gray-400 mb-8">
            Learn more about events and other activities we have been involved with
          </p>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-1">
            {posts.map((post, index) => (
                <div
                key={index}
                className={"flex flex-col items-center text-center"}
                >
                <BlogCard post={post} />
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

export default Blog;