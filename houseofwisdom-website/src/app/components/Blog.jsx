import Image from "next/image";

const { useState } = require("react")

const BlogCard = ({ post }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <button
            className="w-full transition-transform duration-200 transform hover:scale-105"
            onClick={handleOpenPopup}
        >
            <div className="w-full bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden flex">
              {/* THUMBNAIL */}
              <div className="w-48 h-48 bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <h4 className="text-base text-gray-400 mb-2 line-clamp-1">
                    {post.subtitle}
                </h4>
                <p className="text-gray-700 text-sm">
                  {post.date}
                </p>
              </div>
            </div>
        </button>

        {/* POPUP WINDOW */}
        {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                      <div className="bg-white p-8 shadow-2xl max-w-4xl w-full overflow-y-auto max-h-[90vh] rounded-lg">
                        <div className="flex justify-between items-start mb-6">
                          <h4 className="text-2xl font-bold text-gray-800 flex-1 pr-4">
                            {post.title}
                          </h4>
                          <button
                            onClick={handleClosePopup}
                            className="text-gray-500 hover:text-gray-700 text-2xl flex-shrink-0"
                          >
                            ✕
                          </button>
                        </div>
                        
                        {/* IMAGE & CAPTION */}
                        <div className="flex gap-6 mb-6">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={400}
                            className="rounded-lg shadow-md flex-shrink-0"
                            style={{ objectFit: "cover", width: '400px', height: '400px' }}
                          />
                          <p className="text-gray-700 text-justify flex-1">{post.caption}</p>
                        </div>

                        <p className="text-orange-700 text-left text-sm"><i>{post.footer}</i></p>
                      </div>
                    </div>
        )}
        </div>
    )
}

const Blog = ({ posts, archives }) => {
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
            
            {/* ARCHIVES */}
            {archives.map((archive, index) => (
              <div key={index}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-12">
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">{archive.title}</h1>
                </div>
                <div className="grid grid-cols1 md:grid-cols-1 gap-1">
                  {archive.section.map((arc, index) => (
                    <div
                    key={index}
                    className={"flex flex-col items-center text-center"}
                    >
                      <BlogCard post={arc} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
    );
}

export default Blog;