var SimultaneousMediaPlayer = {
    _players: {},
    tracks: [],
    activePlayer: null,
    addPlayer: function(id, filenames)
    {
        this._players[id] = filenames;
        $('#' + id  + ' .player__control-play').click(function() { SimultaneousMediaPlayer.playTracks(id); });
        $('#' + id  + ' .player__control-pause').click(function() { SimultaneousMediaPlayer.stopAll(); });
    },
    playTracks: function(player)
    {
        this.stopAll();
        for (var i = 0; i < this._players[player].length; i++) {
            this.tracks.push(new Audio(this._players[player][i]));
            this.tracks[i].play();
            this.activePlayer = player;
        }
        $('#' + this.activePlayer  + ' .player__control-play').addClass('player__control__disabled');
        $('#' + this.activePlayer  + ' .player__control-pause').removeClass('player__control__disabled');
    },
    stopAll: function ()
    {
        this.pause();
        this.tracks = [];
    },
    pause: function ()
    {
        for (var i = 0; i < this.tracks.length; i++) {
            this.tracks[i].pause();
        }
        $('#' + this.activePlayer  + ' .player__control-play').removeClass('player__control__disabled');
        $('#' + this.activePlayer  + ' .player__control-pause').addClass('player__control__disabled');
    }
};
