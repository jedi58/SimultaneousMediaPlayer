/**
 * This will attach a media player to the element with ID `player_1`
 * and associate it with two media files that will both be played
 * when the play button is clicked. Paths can be specified to these files
 */
MultiTrackMediaPlayer.addPlayer('player_1', [
    'example1.mp3',
    'example2.mp3'
]);

/**
 * This will attach a media player to the element with ID `player_2`
 * and associate it a single media file that will be played
 * when the play button is clicked. Paths can be specified to these files
 */
MultiTrackMediaPlayer.addPlayer('player_2', [
    'example3.mp3'
]);

/**
 * This will attach a media player to the element with ID `player_3`
 * and associate it with three media files that will all be played
 * when the play button is clicked. Paths can be specified to these files
 */
MultiTrackMediaPlayer.addPlayer('player_3', [
    'example4.mp3',
    'example5.mp3',
    'example6.mp3'
]);
