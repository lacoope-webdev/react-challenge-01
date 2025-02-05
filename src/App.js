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
      <h1>Article Sorting</h1>
      <div className="App">
        <section>
          <p>
            <label>
              Ordenar por
            </label>
            <button
              data-testid="most-upvoted-link"
              className="small"
              onClick={handleMostUpvoted}
            >
              Más votados
            </button>
            &nbsp;
            <button
              data-testid="most-recent-link"
              className="small"
              onClick={handleMostRecent}
            >
              Más recientes
            </button>
        </p>
        </section>
        <Articles articles={articles} />
      </div>
    </>
  );
}

export default App;
