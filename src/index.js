import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import FileUploader from "./components/FileUploader";
import FileList from "./components/FileList";
import FilePlot from "./components/FilePlot";

class App extends React.Component {
  state = {
    files: [],
    plotData: []
  };
  componentDidMount() {}

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <FilePlot data={this.state.plotData} />
            <FileUploader
              files={this.state.files}
              setFiles={(newFiles) => {
                this.setState({
                  files: newFiles
                });
              }}
            />
            <FileList
              files={this.state.files}
              setData={(data) => {
                this.setState({
                  plotData: data
                });
              }}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
