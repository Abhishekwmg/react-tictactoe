import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState();

  const handleEdit = () => {
    setIsEditing(() => !isEditing);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            value={editName}
            placeholder="Edit player name"
            onSubmit={() => setEditName(editName)}
          />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
