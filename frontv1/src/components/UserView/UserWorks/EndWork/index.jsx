import React from "react";
import Title from "../../../shared/Title";
import "./styles.css";
import { onFileUploadButtonClick } from "../../../../utils/helpers";
import ProgressRing from "../../../shared/ProgressRing";
import axios from "axios";

function onClickHandler(event, fileInputId, state) {
  const { setError, setProgress, comment } = state;
  setError(null);
  const data = new FormData();
  data.append("file", document.getElementById(fileInputId).files[0]);
  data.append("comment", comment);
  data.append("submisionType", "end");
  let config = {
    onUploadProgress: function(progressEvent) {
      let percentCompleted = Math.round(
        (progressEvent.loaded * 79) / progressEvent.total
      );
      setProgress(percentCompleted);
    }
  };
  axios
    .put("https://workero.site/api/photos", data, config)
    .then(function(res) {
      setProgress(100);
    })
    .catch(function(err) {
      console.log(err.response.status);
      if (err.response.status === 502) {
        setError("Server is down, please contact administrator!");
      } else if (err.response.status === 500) {
        setError("Server crashed!, please contact administrator!");
      } else if (err.response.status === 422) {
        setError("You need to attach an image!");
      } else if (err.response.status === 406) {
        setError(
          "Workplace code cannot be empty, and must consists from 5 or more characters!"
        );
      } else if (err.response.status === 403) {
        setError(
          "You must finish working in current workplace, before you can start work in another workplace"
        );
      } else if (err.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        setError("Unknown error, please contact administrator!");
      }
      setProgress(100);
    });
}

const EndWork = () => {
  const [error, setError] = React.useState(null);
  const [progress, setProgress] = React.useState(0);
  const [comment, setComment] = React.useState(null);
  console.log(comment);
  return (
    <div className="user-main__contents" style={styles.container}>
      <Title title="End Work" />
      <hr />
      <p>Attach photo </p>
      <div>
        {progress === 100 && !error ? (
          <div style={{ color: "green" }}>Uploaded Successfully</div>
        ) : null}
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center"
          }}
          className="file-upload"
        >
          <input
            style={{
              margin: "1rem",
              padding: "1.5rem",
              background: "#eee",
              borderRadius: "1rem"
            }}
            id="file"
            type="file"
            name="file"
            accept="image/*;capture=camera"
          ></input>

          <textarea
            onChange={e => setComment(e.target.value)}
            className="comment-box"
            placeholder="Add a comment..."
            style={{
              margin: "1rem",
              width: "90%",
              resize: "none",
              height: 50,
              border: "1px solid gainsboro",
              borderRadius: "1rem"
            }}
          ></textarea>
          <button
            style={{
              margin: "1rem",
              padding: "1.5rem",
              background: "#eee",
              borderRadius: "1rem"
            }}
            type="button"
            className="btn btn-success btn-block"
            onClick={e =>
              onClickHandler(e, "file", { setError, setProgress, comment })
            }
          >
            Upload
          </button>
          <ProgressRing
            radius={20}
            stroke={4}
            progress={progress}
            color={error ? "red" : "green"}
          />
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem"
  }
};

export default EndWork;
