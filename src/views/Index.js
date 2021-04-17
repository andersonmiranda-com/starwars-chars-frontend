import React from "react";

function Index() {
  return (
    <>
      <main className="d-flex align-items-center">
        <div className="container">
          <h1>Star Wars Characters</h1>

          <h2>Find out more about the characters</h2>
          <a
            className="btn btn-outline-danger btn-sm mt-4"
            color="danger"
            href="/characters"
          >
            <i className="nc-icon nc-spaceship"></i> Start
          </a>
        </div>
      </main>
    </>
  );
}

export default Index;
