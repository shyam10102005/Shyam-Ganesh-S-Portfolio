import React, { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';

// Updated linear positions along Z-axis
// Camera is positioned slightly offset to the side (X) and above (Y) to see the planet
// LookAt target is the center of the planet
const planetPositions = [
    { position: [8, 5, 58], lookAt: [0, 0, 50] },       // About (Planet Z: 50)
    { position: [-10, 8, 108], lookAt: [0, 0, 100] },   // Education (Planet Z: 100)
    { position: [12, 6, 158], lookAt: [0, 0, 150] },    // Projects (Planet Z: 150)
    { position: [-8, 8, 208], lookAt: [0, 0, 200] },    // Skills (Planet Z: 200)
    { position: [10, 7, 258], lookAt: [0, 0, 250] }     // Contact (Planet Z: 250)
];

function ScrollCamera({ currentPlanet, setCurrentPlanet, isDiving, selectedProject, mousePosition }) {
    const { camera, gl, controls } = useThree();
    const scrollY = useRef(0);
    const targetScrollY = useRef(0);
    const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));

    useEffect(() => {
        const handleWheel = (e) => {
            if (isDiving) return;

            e.preventDefault();

            // Adjust scroll speed sensitivity
            targetScrollY.current += e.deltaY * 0.001;
            targetScrollY.current = Math.max(0, Math.min(4, targetScrollY.current));

            const newPlanet = Math.round(targetScrollY.current);
            if (newPlanet !== currentPlanet) {
                setCurrentPlanet(newPlanet);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [currentPlanet, setCurrentPlanet, isDiving]);

    useEffect(() => {
        // Initial camera setup or reset
        if (!isDiving && selectedProject === null) {
            // Set initial lookAt target if not set
            if (planetPositions[currentPlanet]) {
                const target = planetPositions[currentPlanet];
                // We don't snap camera here, we let GSAP handle the transition in the useFrame/Effect
            }
        }
    }, []); // Run once on mount

    useEffect(() => {
        if (isDiving && selectedProject !== null) {
            // Crater dive animation (zoomed in on Projects planet)
            const targetPlanet = planetPositions[2]; // Projects planet index is 2

            // Zoom in very close to the surface
            gsap.to(camera.position, {
                x: targetPlanet.lookAt[0] + 2,
                y: targetPlanet.lookAt[1] + 1,
                z: targetPlanet.lookAt[2] + 4, // Closer Z relative to planet center
                duration: 1.5,
                ease: 'power2.inOut'
            });

            // Update the lookAt target reference for the frame loop
            gsap.to(lookAtTarget.current, {
                x: targetPlanet.lookAt[0],
                y: targetPlanet.lookAt[1],
                z: targetPlanet.lookAt[2],
                duration: 1.5,
                ease: 'power2.inOut'
            });

        } else {
            // Normal orbital navigation
            const target = planetPositions[currentPlanet];

            if (target) {
                gsap.to(camera.position, {
                    x: target.position[0],
                    y: target.position[1],
                    z: target.position[2],
                    duration: 1.5,
                    ease: 'power2.inOut'
                });

                gsap.to(lookAtTarget.current, {
                    x: target.lookAt[0],
                    y: target.lookAt[1],
                    z: target.lookAt[2],
                    duration: 1.5,
                    ease: 'power2.inOut'
                });
            }
        }
    }, [currentPlanet, camera, isDiving, selectedProject]);

    // Update controls target if using OrbitControls
    // Update controls target if using OrbitControls
    useEffect(() => {
        if (controls) {
            // When diving, target the lookAt coordinates
            // When orbiting, target center or specific point
            const target = isDiving ? lookAtTarget.current : new THREE.Vector3(0, 0, 0);

            gsap.to(controls.target, {
                x: target.x,
                y: target.y,
                z: target.z,
                duration: 1.5,
                ease: 'power2.inOut'
            });
        }
    }, [currentPlanet, isDiving, selectedProject, controls]);

    useFrame(() => {
        // Smooth scroll interpolation logic
        scrollY.current += (targetScrollY.current - scrollY.current) * 0.1;

        // Base LookAt logic - REMOVED to let OrbitControls handle it
        // camera.lookAt(lookAtTarget.current);

        // Add subtle cursor-driven camera sway (parallax effect)
        // Only applying position sway, not returning lookAt
        if (!isDiving && mousePosition) {
            const swayAmount = 0.5;
            // Apply slight offset to position without overriding OrbitControls
            camera.position.x += (mousePosition.x * swayAmount - (camera.position.x - camera.position.x)) * 0.05;
            camera.position.y += (mousePosition.y * swayAmount - (camera.position.y - camera.position.y)) * 0.05;
        }
    });

    return null;
}

export default ScrollCamera;