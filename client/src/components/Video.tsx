import React, {useEffect, useRef} from "react";
// import Hls from 'hls.js';

// const baseVideoURL: string = 'https://v.redd.it';

interface VideoObject {
    dash_url: string;
    duration: number;
    fallback_url: string;
    height: number;
    hls_url: string;
    is_gif: boolean;
    scrubber_media_url: string;
    transcoding_status: string;
}

interface VideoProps {
	video: VideoObject;
}

// const hls = new Hls();

const Video: React.FunctionComponent<VideoProps> = ({video}) => {
    // TO DO: Add HLS streaming
    // const videoRef = useRef<HTMLVideoElement>(null);

	// useEffect(() => {
    //     const video = props.video;
    //     const videoElement = videoRef.current;
	// 	if (videoElement) {
    //         console.log(video);
    //         hls.loadSource(video.hls_url);
    //         hls.attachMedia(videoElement);
    //         hls.on(Hls.Events.MANIFEST_PARSED,function() {
    //           videoElement.play();
    //       });
	// 	}
	// }, [props.video]);

    return (
        <video controls>
            <source src={video.hls_url} type="application/x-mpegURL" />
            <source src={video.fallback_url} type="video/mp4" />
        </video>
    );
}

export {Video}