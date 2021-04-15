import React from "react";

const FileList = (props) => {
  const { files, setData } = props;

  const [selectedData, setSelectedData] = React.useState("...");

  const renderData = (fileIdx) => {
    const curFile = files[fileIdx];
    const reader = new FileReader();
    reader.readAsText(curFile);
    reader.onload = () => {
      setSelectedData(reader.result);
      setData(JSON.parse(reader.result));
    };
    reader.onerror = () => {
      setSelectedData(reader.error);
    };
  };

  return (
    <React.Fragment>
      <br />
      {selectedData}
      <br />
      <div style={{ border: "1px solid black", padding: "5px" }}>
        {files.map((file, fileIdx) => (
          <div style={{ display: "flex" }} key={file.name}>
            <div>Name: {file.name}</div>
            <button onClick={() => renderData(fileIdx)}>Render Data</button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default FileList;
