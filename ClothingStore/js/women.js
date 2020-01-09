window.onload = setTimeout(function(){/*video appears after timeout*/
        const video_el = document.createElement('video');
        video_el.setAttribute('src','./video.audio/Ad.mp4');
        video_el.setAttribute('controls','controls');
        video_el.setAttribute('width','560');  /*video attributes*/
        video_el.setAttribute('height','315');
        video_el.setAttribute('id','video');
        video_el.setAttribute('muted','muted');
        const el = document.querySelector('#video-element');
        el.appendChild(video_el);
        /*audio element*/
       const audioElem = document.createElement('audio');
       audioElem.setAttribute('src','./video.audio/music.mp3');
       audioElem.setAttribute('controls','controls');
       audioElem.setAttribute('id','audio-element');
       let footer_el = document.getElementById('page_footer');
       /* insert before footer */
       footer_el.insertBefore(audioElem,footer_el.childNodes[0]);
},3000);