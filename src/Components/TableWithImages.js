import React, { useState, useEffect } from "react";

function TableWithImages() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const data = await response.json();
      
      const modifiedData = data.map((item, index) => ({
        ...item,
        id: index + 1,
      }));
      setItems(modifiedData);
      setLoading(false);
    };

    fetchItems(); 
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="cat-museum-container">
      <h2>Cat Museum</h2>
      <div className="box">
        <div className="table-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {items.slice(0, 3).map((item) => (
                  <tr key={item.id} onClick={() => handleItemClick(item)}>
                    <td>{item.id}</td>
                    <td style={{ color: "blue", cursor: "pointer" }}>
                      {item.url}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="image-container">
          {selectedItem && (
            <img
              src={selectedItem.url}
              alt={selectedItem.id}
              style={{ width: "260", height: "200px" , border: "4px solid black", borderRadius: "8px", padding:"5px"}} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TableWithImages;
