import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="form-container">
        <div className="form-element">
          <label htmlFor="">Driver License Number</label>
          <input type="number" />
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
        <div className="submit-btn">Next</div>
      </div>
    </div>
  );
}

export default App;
