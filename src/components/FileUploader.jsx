import React from "react";

const FileUploader = (props) => {
  const { files, setFiles } = props;

  return (
    <React.Fragment>
      <h4>Files List ({files.length})</h4>
      <br />
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files[0].type !== "application/json") {
            alert(`type is: ${e.target.files[0].type}`);
          }
          setFiles(files.concat(Array.from(e.target.files)));
        }}
      />
    </React.Fragment>
  );
};
export default FileUploader;
