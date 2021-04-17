import Bb8 from "../../assets/img/bb8.gif";

function Loading(props: any) {
  if (props.display)
    return (
      <>
        <div className="vertical-center">
          <img src={Bb8} height="150" />
        </div>
      </>
    );

  return null;
}

export default Loading;
