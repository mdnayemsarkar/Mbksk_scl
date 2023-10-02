
import Header from "./Header"
const News = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-gray-200">
        <h2 className="text-2xl font-semibold p-4">Latest News</h2>
        {/* Add your latest news content here */}
      </div>
      <div className="flex-1 bg-gray-300">
        <h2 className="text-2xl font-semibold p-4">Trending Stories</h2>
        {/* Add your trending news content here */}
      </div>
      <div className="flex-1 bg-gray-400">
        <h2 className="text-2xl font-semibold p-4">Featured Articles</h2>
        {/* Add your featured articles content here */}
      </div>
      <div className="flex-1 bg-gray-500">
        <h2 className="text-2xl font-semibold p-4">Special Reports</h2>
        {/* Add your special reports content here */}
      </div>
      <div className="flex-1 bg-gray-600">
        <h2 className="text-2xl font-semibold p-4">Opinion Pieces</h2>
        {/* Add your opinion pieces content here */}
      </div>
      <div className="flex-1 bg-gray-700">
        <h2 className="text-2xl font-semibold p-4">Local News</h2>
        {/* Add your local news content here */}
      </div>
    </div>
    </>
  );
};

export default News;
