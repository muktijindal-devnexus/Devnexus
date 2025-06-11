"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const { Engine, Runner, Bodies, Composite, Events, Body, Mouse, MouseConstraint } = Matter;

    const engineInstance = engine.current;
    const world = engineInstance.world;

    engineInstance.gravity.y = 0.5;

    const runner = Runner.create();
    Runner.run(runner, engineInstance);

    const boundsWidth = window.innerWidth;
    const boundsHeight = canvasRef.current?.offsetHeight || 500; // fixed height

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

      const x = Math.random() * (boundsWidth - 150) + 75; // avoid spawning too close to edges
      const body = Bodies.rectangle(x, 100, 128, 128, {
        frictionAir: icons[index].frictionAir,
        restitution: 0.8,
      });

      body.element = ref;
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
        if (body.element) {
          const x = body.position.x - 64;
          const y = body.position.y - 64;
          body.element.style.transform = `translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
        }
      });
    });

    return () => {
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engineInstance);
    };
  }, []);

  return (
    <section className="relative bg-white py-20">
      <div className="text-center mb-10 z-10 relative">
        <h2 className="text-4xl font-bold text-[#335D95]">Our Values</h2>
      </div>

      {/* Fixed height container */}
      <div
        ref={canvasRef}
        className="relative mx-auto max-w-7xl "
        style={{ height: "200px" }}
      >
        {icons.map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            ref={(el) => (iconRefs.current[index] = el)}
            className="w-32 h-32 text-[#335D95] flex flex-col items-center justify-center text-center font-semibold"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              willChange: "transform",
              zIndex: 10,
              userSelect: "none",
              cursor: "grab",
              pointerEvents: "auto",
            }}
          >
            <Icon className="text-4xl mb-2" />
            <span className="text-base">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
