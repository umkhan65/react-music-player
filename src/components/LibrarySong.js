const LibrarySong = ({ song, songs, setCurrentSong, id, setSongs }) => {
  //EventHandlers
  const selectSongHandler = () => {
    // const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(song);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });

    setSongs(newSongs);
  };

  return (
    <div
      onClick={selectSongHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
