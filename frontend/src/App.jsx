import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
function App() {
  return (
    <>
      <main className="primary">
        <section className="secondary">
          <div className="card">
            <img src="" alt="#" />
          </div>
          <div className="description">
            <p className="description-section">
              <span>Decription: </span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi fuga laborum repudiandae quasi, sapiente veritatis
            </p>
          </div>
          <div className="button-section">
            {/* <span>
              <FiArrowLeft />
            </span> */}
            <button className="btn">
              <FiArrowLeft />
              Prev
            </button>
            <button className="btn">
              Next
              <FiArrowRight />
            </button>
            {/* <span>
              <FiArrowRight />
            </span> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
