import "./App.css";
import { useRef, useCallback } from "react";
function App() {
  const dlFrontRef = useRef();
  const dlBackRef = useRef();
  const dlFrontImgRef = useRef();
  const dlBackImgRef = useRef();
  const carFrontRef = useRef();
  const carBackRef = useRef();
  const carFrontImgRef = useRef();
  const carBackImgRef = useRef();
  const regFrontRef = useRef();
  const regBackRef = useRef();
  const regFrontImgRef = useRef();
  const regBackImgRef = useRef();
  const showUploadedFile = useCallback((event, imageElement) => {
    imageElement.src = URL.createObjectURL(event.target.files[0]);
  }, []);

  return (
    <div className="App">
      <div className="form-container">
        <div className="form-element">
          <label htmlFor="">Driver License Number</label>
          <input type="number" />
        </div>
        <div className="form-element">
          <label htmlFor="">Driver License Photo</label>
          <div className="img-container">
            <img
              ref={dlFrontImgRef}
              src="https://static.thenounproject.com/png/625182-200.png"
              alt=""
              style={{
                height: "100%",
                width: "95%",
                maxWidth: "150px",
                objectFit: "cover", // border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => {
                dlFrontRef.current.click();
              }}
            />
            <img
              ref={dlBackImgRef}
              className="uploadImg"
              src="https://static.thenounproject.com/png/625182-200.png"
              alt=""
              style={{
                height: "100%",
                width: "95%",
                maxWidth: "150px",
                objectFit: "cover",
                overflow: "hidden",
                // border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => {
                dlBackRef.current.click();
              }}
            />
          </div>

          <input
            ref={dlFrontRef}
            type="file"
            name="image"
            accept="image/gif, image/jpeg, image/png"
            style={{ display: "none" }}
            onChange={(event) => {
              showUploadedFile(event, dlFrontImgRef.current);
            }}
          />
          <input
            ref={dlBackRef}
            type="file"
            name="image"
            accept="image/gif, image/jpeg, image/png"
            style={{ display: "none" }}
            onChange={(event) => {
              showUploadedFile(event, dlBackImgRef.current);
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Vehicle Type</label>
          <select name="" id="">
            <option value="">car1</option>
            <option value="">car2</option>
            <option value="">car3</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="">Car Model</label>
          <input type="text" />
        </div>
        <div className="form-element">
          <label htmlFor="">Car Year of Production</label>
          <input type="number" />
        </div>
        <div className="form-element">
          <label htmlFor="">Vehicle PLate Letters</label>
          <input type="text" />
        </div>
        <div className="form-element">
          <label htmlFor="">Vehicle Plate Number</label>
          <input type="number" />
        </div>
        <div className="form-element">
          <label htmlFor="">Car Photo</label>
          <div className="img-container">
            <img
              ref={carFrontImgRef}
              src="https://static.thenounproject.com/png/625182-200.png"
              alt=""
              style={{
                height: "100%",
                width: "95%",
                maxWidth: "150px",
                objectFit: "cover", // border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => {
                carFrontRef.current.click();
              }}
            />
            <img
              ref={carBackImgRef}
              className="uploadImg"
              src="https://static.thenounproject.com/png/625182-200.png"
              alt=""
              style={{
                height: "100%",
                width: "95%",
                maxWidth: "150px",
                objectFit: "cover",
                overflow: "hidden",
                // border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => {
                carBackRef.current.click();
              }}
            />
          </div>

          <input
            ref={carFrontRef}
            type="file"
            name="image"
            accept="image/gif, image/jpeg, image/png"
            style={{ display: "none" }}
            onChange={(event) => {
              showUploadedFile(event, carFrontImgRef.current);
            }}
          />
          <input
            ref={carBackRef}
            type="file"
            name="image"
            accept="image/gif, image/jpeg, image/png"
            style={{ display: "none" }}
            onChange={(event) => {
              showUploadedFile(event, carBackImgRef.current);
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor="">Car Registration Photo</label>
          <div className="img-container">
            <img
              ref={regFrontImgRef}
              src="https://static.thenounproject.com/png/625182-200.png"
              alt=""
              style={{
                height: "100%",
                width: "95%",
                maxWidth: "150px",
                objectFit: "cover", // border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => {
                regFrontRef.current.click();
              }}
            />
            <img
              ref={regBackImgRef}
              className="uploadImg"
              src="https://static.thenounproject.com/png/625182-200.png"
              alt=""
              style={{
                height: "100%",
                width: "95%",
                maxWidth: "150px",
                objectFit: "cover",
                overflow: "hidden",
                // border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => {
                regBackRef.current.click();
              }}
            />
          </div>

          <input
            ref={regFrontRef}
            type="file"
            name="image"
            accept="image/gif, image/jpeg, image/png"
            style={{ display: "none" }}
            onChange={(event) => {
              showUploadedFile(event, regFrontImgRef.current);
            }}
          />
          <input
            ref={regBackRef}
            type="file"
            name="image"
            accept="image/gif, image/jpeg, image/png"
            style={{ display: "none" }}
            onChange={(event) => {
              showUploadedFile(event, regBackImgRef.current);
            }}
          />
        </div>

        <div className="submit-btn">Next</div>
      </div>
    </div>
  );
}

export default App;
