import Articles from "./components/Articles";

import "./mpv.css"

function App({ articles }) {
  const handleMostUpvoted = () => {
    // Logic for most upvoted articles
  };

  const handleMostRecent = () => {
    // Logic for most recent articles
  };
  return (
    <>
      <h1>Sorting table</h1>
      <div className="App">
        <section>
          <p>
            <label>
              Sort by
            </label>
            <button
              data-testid="most-upvoted-link"
              className="small"
              onClick={handleMostUpvoted}
            >
              Most Upvoted
            </button>
            &nbsp;
            <button
              data-testid="most-recent-link"
              className="small"
              onClick={handleMostRecent}
            >
              Most Recent
            </button>
        </p>
        </section>
        <Articles articles={articles} />
      </div>
    </>
  );
}

export default App;
