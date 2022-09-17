const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
  const handleRoomChange = (room) => {
    setCurrentRoom(room);
    setShowListMenu(false);
  };
  return (
    <div className="rooms">
      <h2>Select room</h2>
      <ul>
        <li
          onClick={() => {
            handleRoomChange("");
          }}
          className={currentRoom === "HTML" ? "active" : ""}
        >
          Reality Show
        </li>
        <li
          onClick={() => {
            handleRoomChange(" Reality Show");
          }}
          className={currentRoom === " Reality Show" ? "active" : ""}
        >
         Documentary
        </li>
        <li
          onClick={() => {
            handleRoomChange("General");
          }}
          className={currentRoom === "General" ? "active" : ""}
        >
          General
        </li>
        <li
          onClick={() => {
            handleRoomChange("general");
          }}
          className={currentRoom === "general" ? "active" : ""}
        >Movies
        </li>
        <li
          onClick={() => {
            handleRoomChange("movies");
          }}
          className={currentRoom === "movies" ? "active" : ""}
        >
         tv shows
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
