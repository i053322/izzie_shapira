var sl = sl || {};
sl.video = (function() {

    "use strict";

     var video =  function() {
     };

    video.prototype.show = function(filePath) {
        $("#jquery_jplayer_1").jPlayer({
                ready: function () {
                    $(this).jPlayer("setMedia", {
                        // title: "Big Buck Bunny",
                        m4v: filePath
                        //  m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
                        // ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
                        // webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
                        // poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
                    });
                },
                swfPath: "scripts",
                supplied: "webmv, ogv, m4v, mp3 , mp4",
                size: {
                    width: "640px",
                    height: "460px",
                    cssClass: "jp-video-360p"
                },
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                fullWindow: true,
                keyEnabled: true,
                remainingDuration: true,
                toggleDuration: true
            });
        };

    return video;
})();


