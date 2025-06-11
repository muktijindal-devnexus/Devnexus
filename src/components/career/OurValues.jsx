"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  FaUsers,
  FaBullseye,
  FaHourglassHalf,
  FaRegClipboard,
  FaBookOpen,
} from "react-icons/fa";

const icons = [
  { icon: FaUsers, label: "Teamwork", frictionAir: 0.001 },
  { icon: FaBullseye, label: "Excellence", frictionAir: 0.02 },
  { icon: FaHourglassHalf, label: "Transparency", frictionAir: 0.05 },
  { icon: FaRegClipboard, label: "Accountability", frictionAir: 0.08 },
  { icon: FaBookOpen, label: "Continuous Learning", frictionAir: 0.1 },
];

export default function OurValues() {
  const engine = useRef(Matter.Engine.create());
  const iconRefs = useRef([]);
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: 200 
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: Math.min(200, window.innerWidth * 0.5) // Adjust height based on screen width
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize dimensions

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const { Engine, Runner, Bodies, Composite, Events, Body, Mouse, MouseConstraint } = Matter;

    const engineInstance = engine.current;
    const world = engineInstance.world;

    engineInstance.gravity.y = 0.5;

    const runner = Runner.create();
    Runner.run(runner, engineInstance);

    const boundsWidth = dimensions.width;
    const boundsHeight = dimensions.height;

    // Clear existing bodies
    Composite.clear(world, false);

    // Walls
    const walls = [
      Bodies.rectangle(boundsWidth / 2, 0, boundsWidth, 30, { isStatic: true }),
      Bodies.rectangle(boundsWidth / 2, boundsHeight, boundsWidth, 30, { isStatic: true }),
      Bodies.rectangle(0, boundsHeight / 2, 30, boundsHeight, { isStatic: true }),
      Bodies.rectangle(boundsWidth, boundsHeight / 2, 30, boundsHeight, { isStatic: true }),
    ];
    Composite.add(world, walls);

    // Create icon bodies
    iconRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const size = Math.min(128, boundsWidth * 0.15); // Responsive size
      const x = Math.random() * (boundsWidth - size * 1.5) + size * 0.75;
      const body = Bodies.rectangle(x, 100, size, size, {
        frictionAir: icons[index].frictionAir,
        restitution: 0.8,
      });

      body.element = ref;
      body.size = size;
      Composite.add(world, body);

      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: Math.random() * 4,
      });
    });

    // Mouse control
    const mouse = Mouse.create(canvasRef.current);
    const mouseConstraint = MouseConstraint.create(engineInstance, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "startdrag", (event) => {
      if (event.body?.element) {
        event.body.element.style.cursor = "grabbing";
      }
    });
    Matter.Events.on(mouseConstraint, "enddrag", (event) => {
      if (event.body?.element) {
        event.body.element.style.cursor = "grab";
      }
    });

    // Sync DOM to physics bodies
    Events.on(engineInstance, "afterUpdate", () => {
      Composite.allBodies(world).forEach((body) => {
        if (body.element && body.size) {
          const halfSize = body.size / 2;
          const x = body.position.x - halfSize;
          const y = body.position.y - halfSize;
          body.element.style.transform = `translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
          body.element.style.width = `${body.size}px`;
          body.element.style.height = `${body.size}px`;
        }
      });
    });

    return () => {
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engineInstance);
    };
  }, [dimensions]);

  return (
    <section className="relative bg-white py-10 md:py-20 overflow-hidden">
      <div className="text-center mb-6 md:mb-10 z-10 relative px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#335D95]">Our Values</h2>
      </div>

      <div
        ref={canvasRef}
        className="relative mx-auto w-full px-4"
        style={{ height: `${dimensions.height}px` }}
      >
        {icons.map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            ref={(el) => (iconRefs.current[index] = el)}
            className="text-[#335D95] flex flex-col items-center justify-center text-center font-semibold"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              willChange: "transform",
              zIndex: 10,
              userSelect: "none",
              cursor: "grab",
              pointerEvents: "auto",
              width: `${Math.min(128, dimensions.width * 0.15)}px`,
              height: `${Math.min(128, dimensions.width * 0.15)}px`,
            }}
          >
            <Icon className="text-2xl md:text-4xl mb-1 md:mb-2" />
            <span className="text-xs md:text-base">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}