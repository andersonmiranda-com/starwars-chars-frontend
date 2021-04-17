function DataError(props: any) {
  if (props.display)
    return (
      <div className="vertical-center">
        <h2>
          Oooops... <br />
          We lost connection to servers :(
        </h2>
        <button
          className="btn btn-sm btn-danger mt-4"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );

  return null;
}

export default DataError;
