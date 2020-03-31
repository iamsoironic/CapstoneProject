import React from 'react'
import NavBar from "./navigation/navbar"
import Footer from "./navigation/footer"


export default function production() {
    return (
        <div>
            <div>
                <NavBar />
                <div className="pro-wrapper">
                <h1>Beats</h1>
                    <div className="song-1">
                        <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743675230&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                    <div className="song-2">
                        <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743679679&color=%23342c26&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                    <div className="song-3">
                        <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/601194669&color=%23342c26&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                    <div className="song-4">
                        <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/614765535&color=%23342c26&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                    
                <h1>Songs</h1>
                    <div className="music-1">
                        <iframe src="https://open.spotify.com/embed/album/5tgMhAKI4nzhbxplvJxu17" width="300" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div className="music-2">
                        <iframe src="https://open.spotify.com/embed/album/3hA159ukflNwWRDulYResZ" width="300" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
                    <Footer />
            </div>
        </div>
    )
}
