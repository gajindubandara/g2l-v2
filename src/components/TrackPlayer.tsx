import  { useState, useEffect, useRef } from 'react';
import { Card } from 'antd';
import { Play, Pause } from "lucide-react";

interface Track {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
    audioUrl: string;
}

const tracks: Track[] = [
    {
        id: '1',
        title: 'Summer Breeze',
        artist: 'Ocean Waves',
        coverUrl: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg',
        audioUrl: 'https://res.cloudinary.com/dkznriytt/video/upload/v1736773330/g2-site/vqufjhb8xrmsetukvovv.mp3',
    },
    {
        id: '2',
        title: 'Mountain Echo',
        artist: 'Nature Sounds',
        coverUrl: 'https://marketplace.canva.com/EAFy2GgsPAo/2/0/1600w/canva-red-minimalist-creative-man-without-head-album-cover-_bB_o4a7jdE.jpg',
        audioUrl: 'https://res.cloudinary.com/dkznriytt/video/upload/v1736773329/g2-site/fksgmskhpy5pc57rol1n.mp3',
    },
    {
        id: '3',
        title: 'Urban Night',
        artist: 'City Lights',
        coverUrl: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg',
        audioUrl: '../assets/audio/song2.mp3',
    },
    {
        id: '4',
        title: 'Rainy Mood',
        artist: 'Ambient Sounds',
        coverUrl: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg',
        audioUrl: '../assets/audio/song2.mp3',
    },
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
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Audio play error:", error);
                });
            }
            startSpectrum();
        } else {
            audio.pause();
            cancelAnimationFrame(animationFrameRef.current || 0);
        }

        return () => {
            cancelAnimationFrame(animationFrameRef.current || 0);
        };
    }, [isPlaying, currentTrack]);

    const startSpectrum = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const bars = 50;
        const barWidth = (canvas.width ?? 0) / bars;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width ?? 0, canvas.height ?? 0);
            ctx.fillStyle = 'rgba(22, 27, 34, 0.2)';
            ctx.fillRect(0, 0, canvas.width ?? 0, canvas.height ?? 0);

            for (let i = 0; i < bars; i++) {
                const height = Math.random() * (canvas.height ?? 0) * 0.6;
                ctx.fillStyle = 'rgba(147, 51, 234, 0.8)';
                ctx.fillRect(
                    i * barWidth + 2,
                    (canvas.height ?? 0) - height,
                    barWidth - 4,
                    height
                );
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();
    };

    const handlePlay = (trackId: string) => {
        if (currentTrack === trackId) {
            setIsPlaying(!isPlaying);
        } else {
            if (audioRef.current) {
                if ("pause" in audioRef.current) {
                    audioRef.current.pause();
                }
                if ("currentTime" in audioRef.current) {
                    audioRef.current.currentTime = 0;
                }
            }

            setCurrentTrack(trackId);
            setIsPlaying(true);
        }
    };

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-right">
                    <h2 className="display-5 fw-bold text-white">Featured Tracks</h2>
                    <p className="lead text-description">Immerse yourself in captivating sounds and melodies</p>
                </div>

                <div className="row g-4 justify-content-center">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '24px',
                        }}
                    >
                        {tracks.map((track) => (
                            <Card
                                key={track.id}
                                style={{
                                    background: '#1f1f1f',
                                    border: 'none',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                }}
                                bodyStyle={{padding: 0}}
                            >
                                <div style={{position: 'relative'}}>
                                    <img
                                        src={track.coverUrl}
                                        alt={track.title}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    {currentTrack === track.id && (
                                        <canvas
                                            ref={canvasRef}
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '64px',
                                            }}
                                        />
                                    )}
                                </div>
                                <div style={{padding: '16px'}}>
                                    <h2 style={{color: '#fff', fontSize: '18px', marginBottom: '8px'}}>
                                        {track.title}
                                    </h2>
                                    <p style={{color: '#9ca3af', marginBottom: '4px'}}>
                                        {track.artist}
                                    </p>
                                    {/*<p style={{color: '#6b7280', fontSize: '14px'}}>*/}
                                    {/*    {track.duration}*/}
                                    {/*</p>*/}
                                    <button
                                        onClick={() => handlePlay(track.id)}
                                        style={{
                                            position: 'absolute',
                                            bottom: '10%',
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
                                            transition: 'background-color 0.3s',
                                        }}
                                    >
                                        {currentTrack === track.id && isPlaying ? (
                                            <Pause style={{fontSize: '32px', color: '#fff'}}/>
                                        ) : (
                                            <Play style={{fontSize: '32px', color: '#fff'}}/>
                                        )}
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <audio
                        ref={audioRef}
                        src={tracks.find((t) => t.id === currentTrack)?.audioUrl}
                        onEnded={() => setIsPlaying(false)}
                    />
                </div>
            </div>
        </section>

    );
};

export default MusicPlayer;
