import "./index.scss";

function Loading(props: any) {
  if (props.display)
    return <div className="spinner-border vertical-center" role="status"></div>;

  return null;
}

export default Loading;
