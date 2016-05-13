# SimultaneousMediaPlayer
A very basic JavaScript object for playing multiple audio tracks at the same time

Example usage:

```html
<ul class="player__container" id="player_1">
    <li class="player__control player__control-play">
        <a href="#">
            <i class="demo-icon icon-play-circled">&#xe800;</i>
            <span>Play</span>
        </a>
    </li>
    <li class="player__control player__control-pause player__control__disabled">
        <a href="#">
            <i class="demo-icon icon-pause-circled">&#xe801;</i>
            <span>Pause</span>
        </a>
    </li>
    <li class="player__display">Some descriptive text</li>
</ul>
<script type="text/javascript">
    SimultaneousMediaPlayer.addPlayer('player_1', [
        'example1.mp3',
        'example2.mp3'
    ]);
</script>
```

When clicking play it will play both audio tracks simultaneously so that if you have seperate audio files for music and voice they can be played together.
