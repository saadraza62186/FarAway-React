import { useState } from "react";
import "./App.css";

function App() {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const addItem = () => {
    if (selectedNumber && inputText) {
      const newItem = {
        number: selectedNumber,
        text: inputText,
        isSelected: false,
      };
      setItems([...items, newItem]);
      setSelectedNumber("");
      setInputText("");
    }
  };

  const toggleSelect = (index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].isSelected = !newItems[index].isSelected;
      const count = newItems.filter((item) => item.isSelected).length;
      setSelectedCount(count);
      return newItems;
    });
  };

  const deleteItem = (index) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((_, i) => i !== index);
      const count = newItems.filter((item) => item.isSelected).length;
      setSelectedCount(count);
      return newItems;
    });
  };

  const percentage = items.length
    ? Math.round((selectedCount / items.length) * 100)
    : 0;

  return (
    <>
      <div id="main">
        <div>
          <img id="img1" src="/src/assets/download__5_-removebg-preview.png" />
        </div>
        <div>
          <img id="img2" src="/src/assets/download-removebg-preview.png" alt="" />
        </div>
        <div>
          <img id="img3" src="/src/assets/images-removebg-preview.png" alt="" />
        </div>
      </div>

      <div id="items">
        <div id="h3">
          <h3>What do you need for your Trip?</h3>

          <div id="dropdown">
            <div className="container">
              <select
                id="option"
                value={selectedNumber}
                onChange={(e) => setSelectedNumber(e.target.value)}
              >
                <option value="">Select Number</option>
                {Array.from({ length: 20 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <input
                id="input"
                type="text"
                placeholder="Write something..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />

              <button id="button" onClick={addItem}>
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="showitems">
        <div id="comp">
          {items.map((item, index) => (
            <div key={index} id="input-2">
              <p id="p1">
                {item.number} : {item.text}
              </p>
              <input
                id="p1"
                type="checkbox"
                onChange={() => deleteItem(index)}
              />
            </div>
          ))}
        </div>
        <div>
          <button className="clear" onClick={() => setItems([]) || setSelectedCount(0)}>
            Clear List
          </button>
        </div>
      </div>

      <div id="countitems">
        <h4 id="h4">
          You have {items.length} items 
        </h4>
      </div>
    </>
  );
}

export default App;
