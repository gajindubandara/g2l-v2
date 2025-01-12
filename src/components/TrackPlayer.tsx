import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

interface Track {
    id: string;
    title: string;
    artist: string;
    duration: string;
    coverUrl: string;
    audioUrl: string;
}

const tracks: Track[] = [
    {
        id: '1',
        title: 'Summer Breeze',
        artist: 'Ocean Waves',
        duration: '3:45',
        coverUrl: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg',
        audioUrl: 'your-audio-url-1'
    },
    {
        id: '2',
        title: 'Mountain Echo',
        artist: 'Nature Sounds',
        duration: '4:20',
        coverUrl: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg',
        audioUrl: 'your-audio-url-2'
    },
    {
        id: '3',
        title: 'Urban Night',
        artist: 'City Lights',
        duration: '3:15',
        coverUrl: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg',
        audioUrl: 'your-audio-url-3'
    },
    {
        id: '4',
        title: 'Urban Night',
        artist: 'City Lights',
        duration: '3:15',
        coverUrl: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg',
        audioUrl: 'your-audio-url-3'
    }
];

const MusicPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        if (!audioRef.current) return;

        const audio = audioRef.current;

        if (isPlaying) {
            if ("play" in audio) {
                audio.play();
            }
            startSpectrum();
        } else {
            if ("pause" in audio) {
                audio.pause();
            }
            if (animationFrameRef.current) {
                if (typeof animationFrameRef.current === "number") {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            }
        }
    }, [isPlaying]);

    const startSpectrum = () => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;

        let ctx;

        if ("getContext" in canvas) {
            ctx = canvas.getContext('2d');
        }
        if (!ctx) return;

        const animate = () => {
            ctx.fillStyle = 'rgba(22, 27, 34, 0.2)';
            if ("width" in canvas) {
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Generate some dummy spectrum bars
            const bars = 20;
            let  barWidth;
            if ("width" in canvas) {
                barWidth = canvas.width / bars;
            }

            for (let i = 0; i < bars; i++) {
                let height;
                if ("height" in canvas) {
                    height = Math.random() * canvas.height * 0.8;
                }
                ctx.fillStyle = 'rgba(147, 51, 234, 0.8)';
                if ("height" in canvas) {
                    ctx.fillRect(
                        i * barWidth,
                        canvas.height - height,
                        barWidth - 2,
                        height
                    );
                }
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();
    };

    const handlePlay = (trackId: string) => {
        if (currentTrack === trackId) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentTrack(trackId);
            setIsPlaying(true);
        }
    };

    return (
        <div style={{ padding: '24px', background: '#141414' }}>
            <h1 style={{ color: '#fff', marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>
                Featured Tracks
            </h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
            }}>
                {tracks.map((track) => (
                    <Card
                        key={track.id}
                        style={{
                            background: '#1f1f1f',
                            border: 'none',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}
                        bodyStyle={{ padding: 0 }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img
                                src={track.coverUrl}
                                alt={track.title}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            <button
                                onClick={() => handlePlay(track.id)}
                                style={{
                                    position: 'absolute',
                                    bottom: '16px',
                                    right: '16px',
                                    background: '#9333ea',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s'
                                }}
                            >
                                {currentTrack === track.id && isPlaying ? (
                                    <PauseCircleOutlined style={{ fontSize: '32px', color: '#fff' }} />
                                ) : (
                                    <PlayCircleOutlined style={{ fontSize: '32px', color: '#fff' }} />
                                )}
                            </button>
                            {currentTrack === track.id && (
                                <canvas
                                    ref={canvasRef}
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '64px'
                                    }}
                                />
                            )}
                        </div>
                        <div style={{ padding: '16px' }}>
                            <h2 style={{ color: '#fff', fontSize: '18px', marginBottom: '8px' }}>
                                {track.title}
                            </h2>
                            <p style={{ color: '#9ca3af', marginBottom: '4px' }}>
                                {track.artist}
                            </p>
                            <p style={{ color: '#6b7280', fontSize: '14px' }}>
                                {track.duration}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
            <audio
                ref={audioRef}
                src={tracks.find(t => t.id === currentTrack)?.audioUrl}
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    );
};

export default MusicPlayer;