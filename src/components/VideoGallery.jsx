import React, { useState, useEffect, useRef } from 'react';
import { PlayCircle, Youtube, Loader2, AlertCircle } from 'lucide-react';

// --- ACTION REQUIRED: UPDATE THIS ---
// Enter your actual YouTube Channel ID below.
// You can usually find this in your YouTube Studio -> Settings -> Channel -> Advanced Settings
// or by looking at the URL if it's in the format youtube.com/channel/UC......
const YOUTUBE_CHANNEL_ID = 'UC63n-Xu0IIZ8OvF2aC3QhOw'; // Placeholder: freeCodeCamp channel ID

// We use rss2json to convert the public YouTube XML RSS feed into a readable JSON structure without needing a Google API Key
const RSS_TO_JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D${YOUTUBE_CHANNEL_ID}`;

const VideoCard = ({ video }) => (
    <a
        href={video.link} // Direct link to the YouTube video from the feed
        target="_blank"
        rel="noreferrer"
        className="flex-shrink-0 w-56 h-36 md:w-72 md:h-44 relative rounded-xl overflow-hidden group cursor-pointer shadow-sm border border-slate-200 bg-slate-100"
    >
        {/* Thumbnail Image */}
        <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
                // Fallback for missing/broken thumbnails from RSS
                e.target.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop&q=80';
            }}
        />

        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/50 transition-colors duration-300"></div>

        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <PlayCircle className="w-10 h-10 md:w-12 md:h-12 text-white fill-white/20" />
        </div>

        {/* Video Info Label */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-3 bg-gradient-to-t from-slate-900/90 to-transparent">
            {/* We use dangerouslySetInnerHTML to properly decode HTML entities in the title from RSS */}
            <h4
                className="text-white text-xs md:text-sm font-semibold truncate leading-tight mb-1"
                dangerouslySetInnerHTML={{ __html: video.title }}
            />
            <div className="flex items-center gap-1.5 text-slate-300 text-[10px] md:text-xs font-medium">
                <Youtube className="w-3 h-3 text-red-500" />
                <span className="truncate">{video.author}</span>
            </div>
        </div>
    </a>
);

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setLoading(true);
                const response = await fetch(RSS_TO_JSON_API);
                const data = await response.json();

                if (data.status === 'ok') {
                    // Ensure we get exactly 10 or up to 10 items
                    const fetchedVids = data.items.slice(0, 10);
                    setVideos(fetchedVids);
                } else {
                    throw new Error(data.message || 'Could not fetch videos from feed.');
                }
            } catch (err) {
                console.error('Error fetching YouTube RSS:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    // Auto-scroll logic
    useEffect(() => {
        let animationFrameId;
        const scrollContainer = scrollRef.current;

        const autoScroll = () => {
            if (!isPaused && scrollContainer) {
                // Adjust scroll speed here.
                scrollContainer.scrollLeft += 1;
                // If we've scrolled past half the duplicated items, seamlessly loop back
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        if (videos.length > 0) {
            animationFrameId = requestAnimationFrame(autoScroll);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, videos]);

    // To create a seamless infinite scroll effect, we need enough items to fill the screen twice.
    // We duplicate the fetched array.
    const duplicatedVideos = [...videos, ...videos, ...videos, ...videos];

    return (
        <section className="py-6 md:py-8 overflow-hidden relative w-full">

            {/* Render the container as user-scrollable but hide the scrollbar */}
            <div
                className="relative flex whitespace-nowrap overflow-x-auto overflow-y-hidden min-h-[9.5rem] md:min-h-[11rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >

                {loading ? (
                    <div className="flex items-center justify-center w-full min-h-[9.5rem] md:min-h-[11rem] text-slate-500 absolute inset-0 z-20 bg-transparent">
                        <Loader2 className="w-6 h-6 animate-spin mr-2 text-blue-500" />
                        <span className="font-medium text-sm">Loading latest lectures...</span>
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center w-full min-h-[9.5rem] md:min-h-[11rem] text-rose-500 absolute inset-0 z-20 bg-transparent rounded-lg mx-auto max-w-lg">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium text-sm">Please update your YouTube Channel ID in the code to display videos here.</span>
                    </div>
                ) : videos.length === 0 ? (
                    <div className="flex items-center justify-center w-full min-h-[9.5rem] md:min-h-[11rem] text-slate-500 absolute inset-0 z-20 bg-transparent">
                        <span className="font-medium text-sm">No videos found. Check your Channel ID.</span>
                    </div>
                ) : (
                    <div className="flex gap-3 md:gap-4 items-center px-3 md:px-4 w-max">
                        {duplicatedVideos.map((video, index) => (
                            <VideoCard key={`${video.guid}-${index}`} video={video} />
                        ))}
                    </div>
                )}
            </div>

            <div className="text-center mt-3 md:mt-4">
                <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <Youtube className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> Catch Our Latest Lectures on YouTube
                </span>
            </div>
        </section>
    );
};

export default VideoGallery;
