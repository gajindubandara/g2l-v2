// src/components/ParticleBackground.tsx
import React, { useEffect, useRef } from 'react';

class Particle {
    x!: number;
    y!: number;
    size!: number;
    alpha!: number;
    speed!: number;
    direction!: number;
    vx!: number;
    vy!: number;
    distanceToTurn!: number;
    distanceTraveled!: number;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.reset();
    }

    reset() {
        // Start from a random edge
        if (Math.random() < 0.5) {
            this.x = Math.random() < 0.5 ? 0 : this.canvas.width;
            this.y = Math.random() * this.canvas.height;
        } else {
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() < 0.5 ? 0 : this.canvas.height;
        }

        this.size = Math.random() * 2 + 1;
        this.alpha = 1;
        this.speed = Math.random() * 2 + 2;

        // Initialize direction (0: right, 1: down, 2: left, 3: up)
        this.direction = Math.floor(Math.random() * 4);
        this.setVelocity();

        // Distance until next turn
        this.distanceToTurn = Math.random() * 100 + 50;
        this.distanceTraveled = 0;
    }

    setVelocity() {
        switch (this.direction) {
            case 0: // right
                this.vx = this.speed;
                this.vy = 0;
                break;
            case 1: // down
                this.vx = 0;
                this.vy = this.speed;
                break;
            case 2: // left
                this.vx = -this.speed;
                this.vy = 0;
                break;
            case 3: // up
                this.vx = 0;
                this.vy = -this.speed;
                break;
        }
    }

    turn() {
        // Turn left or right (90 degrees)
        this.direction = (this.direction + (Math.random() < 0.5 ? 1 : 3)) % 4;
        this.setVelocity();
        this.distanceToTurn = Math.random() * 100 + 50;
        this.distanceTraveled = 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Calculate distance traveled
        this.distanceTraveled += this.speed;

        // Check if it's time to turn
        if (this.distanceTraveled >= this.distanceToTurn) {
            this.turn();
        }

        // Start fading out near edges
        const edgeDistance = 50;
        if (
            this.x < edgeDistance ||
            this.x > this.canvas.width - edgeDistance ||
            this.y < edgeDistance ||
            this.y > this.canvas.height - edgeDistance
        ) {
            this.alpha -= 0.02;
        }

        // Reset if particle is out of bounds or fully faded
        if (
            this.alpha <= 0 ||
            this.x < -20 ||
            this.x > this.canvas.width + 20 ||
            this.y < -20 ||
            this.y > this.canvas.height + 20
        ) {
            this.reset();
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        // Draw particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 43, 226, ${this.alpha})`;
        ctx.fill();

        // Draw trail
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.vx * 8, this.y - this.vy * 8);
        ctx.strokeStyle = `rgba(138, 43, 226, ${this.alpha * 0.5})`;
        ctx.stroke();
    }
}

export const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationFrameRef = useRef<number>();
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initial setup
        resizeCanvas();
        particlesRef.current = Array.from({ length: 50 }, () => new Particle(canvas));

        // Animation function
        let lastTime = 0;
        const fps = 60;
        const frameInterval = 1000 / fps;

        const animate = (currentTime: number) => {
            if (!lastTime) lastTime = currentTime;
            const deltaTime = currentTime - lastTime;

            if (deltaTime > frameInterval) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                particlesRef.current.forEach((particle) => {
                    particle.update();
                    particle.draw(ctx);
                });

                lastTime = currentTime - (deltaTime % frameInterval);
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animate(0);

        // Add resize listener
        window.addEventListener('resize', resizeCanvas);

        // Cleanup
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                background: 'black',
            }}
        />
    );
};


