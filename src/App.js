import { useState } from "react";
import Articles from "./components/Articles";

import "./mpv.css"

function App({ articles }) {
  const [orderDate, setOrdenDate] = useState(0);

  const handleDateOrder = () => {
    // Lógica de ordenamiento por fechas
  };

  return (
    <>
      <h1>Article Sorting</h1>
      <div className="App">
        <section>
          <p>
            <button
              data-testid="date-order-link"
              className="small"
              onClick={handleDateOrder}
            >
              Ordenar por {orderDate > 0 ? 'más antigüos' : 'más recientes'}
            </button>
        </p>
        </section>
        <Articles articles={articles} />
      </div>
    </>
  );
}

export default App;
