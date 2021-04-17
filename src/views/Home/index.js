import "./index.scss";

function Home() {
  return (
    <>
      <main className="black-back back-image1 row text-center h-100">
        <content className="vertical-center col-sm-12">
          <h1>Star Wars Characters</h1>
          <h2>Find out more about the characters</h2>

          <a className="btn btn-danger mt-4" color="danger" href="/characters">
            Start
          </a>
        </content>
      </main>
    </>
  );
}

export default Home;
