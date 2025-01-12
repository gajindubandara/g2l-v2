// src/components/ParticleBackground.tsx
import React, { useEffect, useRef } from 'react';

class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (
            this.x < 0 ||
            this.x > this.canvas.width ||
            this.y < 0 ||
            this.y > this.canvas.height
        ) {
            this.reset();
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(95,101,236, ${this.opacity})`;
        ctx.fill();
    }
}

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationFrameRef = useRef<number>();
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        // Initial setup
        resizeCanvas();
        particlesRef.current = Array(100)
            .fill(null)
            .map(() => new Particle(canvas));

        // Animation function
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.fillStyle = '#121212';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw(ctx);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        // Add resize listener
        window.addEventListener('resize', resizeCanvas);

        // Cleanup
        return () => {
            if (animationFrameRef.current) {
                if (typeof animationFrameRef.current === "number") {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            }
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} style={styles.canvas} />;
};

const styles = {
    canvas: {
        position: 'fixed' as const,
        top: '0px',
        left: '0px',
        zIndex: -1,
        background: '#8a0d2a',
    } as React.CSSProperties, // Explicitly cast to CSSProperties
};

export default ParticleBackground;