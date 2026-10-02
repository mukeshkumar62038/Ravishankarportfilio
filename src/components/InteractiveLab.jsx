import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Atom, 
  Calculator, 
  FlaskConical, 
  Sparkles,
  Sliders,
  Maximize2
} from 'lucide-react';
import './InteractiveLab.css';

export default function InteractiveLab() {
  // Simulator State
  const [velocity, setVelocity] = useState(45); // m/s
  const [angle, setAngle] = useState(45); // degrees
  const [gravity, setGravity] = useState(9.8); // m/s^2
  const [isSimulating, setIsSimulating] = useState(false);
  const [simProgress, setSimProgress] = useState(0);

  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Computed Values
  const rad = (angle * Math.PI) / 180;
  const timeOfFlight = (2 * velocity * Math.sin(rad)) / gravity;
  const maxHeight = (Math.pow(velocity * Math.sin(rad), 2)) / (2 * gravity);
  const range = (Math.pow(velocity, 2) * Math.sin(2 * rad)) / gravity;

  // Render Canvas Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Grid & Axis
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    const step = 40;
    for (let x = 0; x < width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Ground line
    const groundY = height - 40;
    const originX = 50;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(width, groundY);
    ctx.stroke();

    // Scale factors to fit within canvas
    const scaleX = (width - 120) / Math.max(range * 1.15, 60);
    const scaleY = (groundY - 40) / Math.max(maxHeight * 1.25, 40);

    // Draw theoretical trajectory path (dashed)
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = 'rgba(255, 1, 79, 0.4)';
    ctx.lineWidth = 2;
    const totalSteps = 120;
    for (let i = 0; i <= totalSteps; i++) {
      const t = (i / totalSteps) * timeOfFlight;
      const x = velocity * Math.cos(rad) * t;
      const y = velocity * Math.sin(rad) * t - 0.5 * gravity * Math.pow(t, 2);
      const canvasX = originX + x * scaleX;
      const canvasY = groundY - y * scaleY;
      if (i === 0) ctx.moveTo(canvasX, canvasY);
      else ctx.lineTo(canvasX, canvasY);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw active animated path
    const activeTime = (simProgress / 100) * timeOfFlight;
    ctx.beginPath();
    ctx.strokeStyle = '#ff014f';
    ctx.lineWidth = 3;
    const activeSteps = Math.floor((simProgress / 100) * totalSteps);
    for (let i = 0; i <= activeSteps; i++) {
      const t = (i / totalSteps) * timeOfFlight;
      const x = velocity * Math.cos(rad) * t;
      const y = velocity * Math.sin(rad) * t - 0.5 * gravity * Math.pow(t, 2);
      const canvasX = originX + x * scaleX;
      const canvasY = groundY - y * scaleY;
      if (i === 0) ctx.moveTo(canvasX, canvasY);
      else ctx.lineTo(canvasX, canvasY);
    }
    ctx.stroke();

    // Draw Projectile Ball
    const curX = velocity * Math.cos(rad) * activeTime;
    const curY = velocity * Math.sin(rad) * activeTime - 0.5 * gravity * Math.pow(activeTime, 2);
    const ballCanvasX = originX + curX * scaleX;
    const ballCanvasY = groundY - curY * scaleY;

    // Glowing Projectile
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#ff014f';
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(ballCanvasX, ballCanvasY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Apex marker
    const apexX = originX + (range / 2) * scaleX;
    const apexY = groundY - maxHeight * scaleY;
    ctx.fillStyle = '#00d2ff';
    ctx.beginPath();
    ctx.arc(apexX, apexY, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '11px Poppins';
    ctx.fillStyle = '#00d2ff';
    ctx.fillText(`H_max: ${maxHeight.toFixed(1)}m`, apexX - 30, apexY - 12);

    // Range marker
    const endX = originX + range * scaleX;
    ctx.fillStyle = '#00f298';
    ctx.beginPath();
    ctx.arc(endX, groundY, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#00f298';
    ctx.fillText(`Range: ${range.toFixed(1)}m`, endX - 25, groundY + 22);

  }, [velocity, angle, gravity, simProgress, range, maxHeight, timeOfFlight, rad]);

  // Handle Animation
  useEffect(() => {
    if (isSimulating) {
      let current = 0;
      const interval = setInterval(() => {
        current += 1.5;
        if (current >= 100) {
          setSimProgress(100);
          setIsSimulating(false);
          clearInterval(interval);
        } else {
          setSimProgress(current);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isSimulating]);

  const handleStartSim = () => {
    setSimProgress(0);
    setIsSimulating(true);
  };

  const handleResetSim = () => {
    setIsSimulating(false);
    setSimProgress(100);
  };

  // Formula Bank
  const [formulaSubject, setFormulaSubject] = useState('physics');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const formulas = {
    physics: [
      {
        name: "Time of Flight & Max Height (Projectile)",
        formula: "T = (2 * v_0 * sin θ) / g  |  H_max = (v_0^2 * sin^2 θ) / (2g)",
        note: "Derived from vertical kinematic equation v_y = u_y - gt at apex."
      },
      {
        name: "Parallel Axis Theorem (Rotational Mechanics)",
        formula: "I = I_com + M * d^2",
        note: "Crucial for calculating Moment of Inertia of displaced rigid bodies in JEE Advanced."
      },
      {
        name: "Faraday's Law & Induced EMF (Electromagnetism)",
        formula: "ε = -dΦ_B / dt = -d(B · A) / dt",
        note: "Negative sign denotes Lenz's Law opposing change in magnetic flux."
      },
      {
        name: "Carnot Engine Efficiency (Thermodynamics)",
        formula: "η = 1 - (T_cold / T_hot) = W_net / Q_hot",
        note: "Absolute temperatures MUST always be in Kelvin."
      }
    ],
    math: [
      {
        name: "Leibniz Integral Rule (Definite Integration)",
        formula: "d/dx [ ∫_{u(x)}^{v(x)} f(t) dt ] = f(v(x)) * v'(x) - f(u(x)) * u'(x)",
        note: "Extremely frequent in JEE Advanced for limits involving integrals."
      },
      {
        name: "Euler's Identity & De Moivre (Complex Numbers)",
        formula: "e^{iθ} = cos θ + i sin θ  ⇒  (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)",
        note: "Turns complex polynomial roots and trigonometric summation into simple algebra."
      },
      {
        name: "Shortest Distance Between Skew Lines (3D Geometry)",
        formula: "d = | (a_2 - a_1) · (b_1 × b_2) | / | b_1 × b_2 |",
        note: "Guaranteed question in JEE Main and Advanced coordinate geometry."
      },
      {
        name: "Tangent Condition for Parabola y^2 = 4ax",
        formula: "y = m*x + a/m  with point of contact (a/m^2, 2a/m)",
        note: "Standard slope form indispensable for common tangent problems."
      }
    ],
    chemistry: [
      {
        name: "Nernst Equation (Electrochemistry)",
        formula: "E_cell = E°_cell - (0.0591 / n) * log10(Q)  at 298 K",
        note: "Used to determine non-standard EMF and equilibrium constants K_eq."
      },
      {
        name: "First-Order Integrated Rate Law (Chemical Kinetics)",
        formula: "k = (2.303 / t) * log10([A]_0 / [A]_t)  |  t_{1/2} = 0.693 / k",
        note: "Half-life of first-order reactions is independent of initial concentration."
      },
      {
        name: "Crystal Field Stabilization Energy (CFT - Octahedral)",
        formula: "CFSE = (-0.4 * n_{t2g} + 0.6 * n_{eg}) * Δ_o + n_p * P",
        note: "Determines low spin vs high spin configuration in coordination complexes."
      },
      {
        name: "Aldol & Cannizzaro Distinction (Organic Mechanisms)",
        formula: "Aldol: Requires α-H (Forms α,β-unsaturated carbonyl)  |  Cannizzaro: No α-H (Disproportionation)",
        note: "Classic distinguishing test mechanism in Advanced Organic Chemistry."
      }
    ]
  };

  const copyFormula = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="lab-section" id="lab">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">SIMULATION & INTERACTIVE ENGINE</span>
          <h2 className="section-title">Interactive JEE & Tech Lab</h2>
          <p className="section-subtitle">
            Experience real-time computational physics simulations and explore essential 
            JEE Advanced conceptual formulas live in your browser.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="sim-master-card neumorphic-card">
          <div className="sim-top-bar">
            <div className="sim-title-group">
              <Atom size={22} className="sim-header-icon" />
              <div>
                <h3 className="sim-title">Live Physics Projectile Motion Simulator</h3>
                <p className="sim-sub">Calculates kinematics & plots parabolic trajectory in 2D space</p>
              </div>
            </div>
            <div className="sim-actions-group">
              <button 
                className="sim-action-btn primary" 
                onClick={handleStartSim}
                disabled={isSimulating}
              >
                <Play size={15} />
                <span>{isSimulating ? 'Simulating...' : 'Launch Projectile'}</span>
              </button>
              <button className="sim-action-btn secondary" onClick={handleResetSim}>
                <RotateCcw size={15} />
                <span>Reset View</span>
              </button>
            </div>
          </div>

          <div className="sim-body-grid">
            {/* Left Controls & Metrics */}
            <div className="sim-controls-panel">
              <h4 className="panel-title">
                <Sliders size={16} /> Parameters
              </h4>

              {/* Velocity Slider */}
              <div className="control-slider-group">
                <div className="slider-label-row">
                  <span>Launch Velocity (v₀)</span>
                  <strong>{velocity} m/s</strong>
                </div>
                <input
                  type="range"
                  min="15"
                  max="90"
                  value={velocity}
                  onChange={(e) => setVelocity(Number(e.target.value))}
                  className="slider-input"
                />
              </div>

              {/* Angle Slider */}
              <div className="control-slider-group">
                <div className="slider-label-row">
                  <span>Launch Angle (θ)</span>
                  <strong>{angle}°</strong>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="slider-input"
                />
              </div>

              {/* Gravity Select */}
              <div className="control-slider-group">
                <div className="slider-label-row">
                  <span>Gravity (g)</span>
                  <strong>{gravity} m/s²</strong>
                </div>
                <div className="gravity-pills">
                  <button 
                    className={`grav-pill ${gravity === 9.8 ? 'active' : ''}`}
                    onClick={() => setGravity(9.8)}
                  >
                    Earth (9.8)
                  </button>
                  <button 
                    className={`grav-pill ${gravity === 10 ? 'active' : ''}`}
                    onClick={() => setGravity(10)}
                  >
                    JEE Approx (10)
                  </button>
                  <button 
                    className={`grav-pill ${gravity === 1.62 ? 'active' : ''}`}
                    onClick={() => setGravity(1.62)}
                  >
                    Moon (1.62)
                  </button>
                </div>
              </div>

              {/* Computed Telemetry */}
              <div className="telemetry-box">
                <h4 className="telemetry-title">Kinematic Outputs</h4>
                <div className="telemetry-items">
                  <div className="tele-item">
                    <span className="tele-label">Horizontal Range (R):</span>
                    <span className="tele-val highlight-green">{range.toFixed(2)} m</span>
                  </div>
                  <div className="tele-item">
                    <span className="tele-label">Max Height (H_max):</span>
                    <span className="tele-val highlight-blue">{maxHeight.toFixed(2)} m</span>
                  </div>
                  <div className="tele-item">
                    <span className="tele-label">Time of Flight (T):</span>
                    <span className="tele-val highlight-red">{timeOfFlight.toFixed(2)} s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Canvas */}
            <div className="sim-canvas-wrapper">
              <canvas
                ref={canvasRef}
                width={650}
                height={350}
                className="sim-canvas"
              />
              <div className="canvas-watermark">
                <span>Computational Mechanics Engine • RaviShankar Portfolio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formula Bank Card */}
        <div className="formula-bank-container">
          <div className="formula-header-row">
            <h3 className="formula-main-title">
              <Sparkles size={20} className="formula-sparkle" />
              Essential JEE Advanced Formula Quick-Bank
            </h3>

            {/* Subject Tabs */}
            <div className="formula-subject-tabs">
              <button
                className={`subject-pill ${formulaSubject === 'physics' ? 'active' : ''}`}
                onClick={() => setFormulaSubject('physics')}
              >
                <Atom size={15} /> Physics
              </button>
              <button
                className={`subject-pill ${formulaSubject === 'math' ? 'active' : ''}`}
                onClick={() => setFormulaSubject('math')}
              >
                <Calculator size={15} /> Mathematics
              </button>
              <button
                className={`subject-pill ${formulaSubject === 'chemistry' ? 'active' : ''}`}
                onClick={() => setFormulaSubject('chemistry')}
              >
                <FlaskConical size={15} /> Chemistry
              </button>
            </div>
          </div>

          {/* Formulas Grid */}
          <div className="formula-cards-grid">
            {formulas[formulaSubject].map((item, idx) => (
              <div key={idx} className="formula-card neumorphic-card">
                <div className="formula-card-head">
                  <h4 className="formula-name">{item.name}</h4>
                  <button
                    className="copy-btn"
                    onClick={() => copyFormula(item.formula, idx)}
                    title="Copy formula text"
                  >
                    {copiedIndex === idx ? (
                      <span className="copied-text"><Check size={14} /> Copied</span>
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>
                <div className="formula-code-box">
                  <code>{item.formula}</code>
                </div>
                <p className="formula-note">
                  <strong>Exam Tip:</strong> {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
