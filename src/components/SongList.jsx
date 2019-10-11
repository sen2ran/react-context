import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSong'

const SongList = () => {
    const [songs, setSong] = useState([
        { title: 'This wild darkness', id: 1 },
        { title: 'Memory gospel', id: 2 },
        { title: 'Almost home', id: 3 },
    ]);

    const [age, setAge] = useState(20);

    useEffect(() => {
        console.log('UseEffect Run', songs)
    }, [songs])
    useEffect(() => {
        console.log('UseEffect Run', age)
    }, [age])


    const addSong = (title) => {
        setSong([
            ...songs,
            { title, id: Number(new Date()) },
        ])
    }
    return (
        <div className="song-list">
            <ul>
                {
                    songs.map(song => {
                        return (<li key={song.id}> {song.title}</li>)
                    })
                }
            </ul>
            <button onClick={() => {
                setAge(age + 1)
            }}>Add age : {age}</button>
            <NewSongForm addSong={addSong} />
        </div>
    )
}
export default SongList