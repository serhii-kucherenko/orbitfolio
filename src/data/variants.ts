export type VariantMeta = {
  id: number;
  slug: string;
  name: string;
  thesis: string;
  stack: string[];
  scores?: {
    coolness: number;
    comprehensiveness: number;
    uniqueness: number;
    motion: number;
    hireability: number;
  };
};

export const VARIANT_COUNT = 50;

/** Scores from design-lab pass (0–10). Champion = highest composite. */
export const variants: VariantMeta[] = [
  { id: 1, slug: "nebula-terminal", name: "Nebula Terminal", thesis: "CRT command shell over living nebula; typewriter CV", stack: ["canvas", "framer", "mono"], scores: { coolness: 8.2, comprehensiveness: 9.0, uniqueness: 8.5, motion: 7.5, hireability: 8.0 } },
  { id: 2, slug: "orbital-timeline", name: "Orbital Timeline", thesis: "Career as planets on elliptical orbits; click to dock", stack: ["svg", "framer"], scores: { coolness: 8.5, comprehensiveness: 8.5, uniqueness: 9.0, motion: 7.0, hireability: 7.5 } },
  { id: 3, slug: "warp-corridor", name: "Warp Corridor", thesis: "Hyperspace tunnel hero; sections emerge from light speed", stack: ["css-3d", "gsap"], scores: { coolness: 9.0, comprehensiveness: 8.5, uniqueness: 8.0, motion: 8.5, hireability: 8.0 } },
  { id: 4, slug: "constellation-skills", name: "Constellation Skills", thesis: "Interactive skill star map with constellation lines", stack: ["canvas", "svg"], scores: { coolness: 8.0, comprehensiveness: 9.0, uniqueness: 8.5, motion: 7.0, hireability: 8.0 } },
  { id: 5, slug: "mission-briefing", name: "Mission Briefing", thesis: "Cinematic pre-launch brief — not a dashboard", stack: ["framer", "film"], scores: { coolness: 8.3, comprehensiveness: 9.2, uniqueness: 7.5, motion: 7.5, hireability: 9.0 } },
  { id: 6, slug: "glass-nebula", name: "Daylight Glass", thesis: "Daylight frosted glass — peach-to-sky panels over airy light", stack: ["backdrop", "gradient", "light"], scores: { coolness: 8.4, comprehensiveness: 9.0, uniqueness: 8.2, motion: 7.5, hireability: 8.5 } },
  { id: 7, slug: "kinetic-type", name: "Kinetic Type", thesis: "Oversized motion typography; content secondary until scroll", stack: ["gsap", "split"], scores: { coolness: 8.8, comprehensiveness: 8.0, uniqueness: 8.5, motion: 9.0, hireability: 7.0 } },
  { id: 8, slug: "dual-narrative", name: "Dual Narrative", thesis: "Split: cream recruiter pitch vs slate engineer log — two audiences, one CV", stack: ["split", "hire", "light"], scores: { coolness: 7.8, comprehensiveness: 9.4, uniqueness: 9.0, motion: 5.5, hireability: 9.5 } },
  { id: 9, slug: "parallax-deep", name: "Parallax Deep", thesis: "Multi-layer starfield parallax with sticky chapters", stack: ["parallax", "lenis"], scores: { coolness: 8.6, comprehensiveness: 8.5, uniqueness: 7.5, motion: 8.5, hireability: 8.0 } },
  { id: 10, slug: "editorial-cosmos", name: "Editorial Press", thesis: "Light broadsheet magazine — masthead, columns, pull quotes", stack: ["editorial", "serif", "columns"], scores: { coolness: 8.0, comprehensiveness: 8.5, uniqueness: 9.0, motion: 6.5, hireability: 8.2 } },
  { id: 11, slug: "void-minimal", name: "Paper Void", thesis: "Extreme white void — sparse serif, proof on scroll", stack: ["minimal", "serif", "whitespace"], scores: { coolness: 7.5, comprehensiveness: 8.0, uniqueness: 9.4, motion: 6.0, hireability: 7.5 } },
  { id: 12, slug: "holo-deck", name: "Holo Deck", thesis: "Holographic scanlines + projected experience slabs", stack: ["css", "scan"], scores: { coolness: 8.5, comprehensiveness: 8.6, uniqueness: 8.6, motion: 8.0, hireability: 8.0 } },
  { id: 13, slug: "galaxy-rail", name: "Galaxy Rail", thesis: "Horizontal scroll through career galaxies", stack: ["horizontal", "lenis"], scores: { coolness: 8.3, comprehensiveness: 8.6, uniqueness: 8.9, motion: 8.0, hireability: 7.6 } },
  { id: 14, slug: "planet-stage", name: "Planet Stage", thesis: "R3F planet with orbiting project moons", stack: ["r3f", "drei"], scores: { coolness: 9.2, comprehensiveness: 8.0, uniqueness: 9.0, motion: 9.0, hireability: 7.5 } },
  { id: 15, slug: "ascii-orbit", name: "ASCII Orbit", thesis: "ASCII art starfields and mono manifesto", stack: ["ascii", "pre"], scores: { coolness: 8.0, comprehensiveness: 8.7, uniqueness: 9.3, motion: 6.0, hireability: 7.4 } },
  { id: 16, slug: "recruiter-profile", name: "Recruiter Profile", thesis: "Clean LinkedIn-like profile page — dense proof, light professional UI", stack: ["profile", "hire", "light"], scores: { coolness: 7.2, comprehensiveness: 9.5, uniqueness: 8.8, motion: 4.5, hireability: 9.7 } },
  { id: 17, slug: "clinic-cosmos", name: "Clinic Product", thesis: "Clinical SaaS marketing — mint calm, outcomes, appointment CTAs", stack: ["saas", "mint", "clinical"], scores: { coolness: 7.5, comprehensiveness: 9.0, uniqueness: 8.6, motion: 6.5, hireability: 9.0 } },
  { id: 18, slug: "code-rain", name: "Code Rain Nebula", thesis: "Matrix rain dissolves into nebula CV reveals", stack: ["canvas", "rain"], scores: { coolness: 8.6, comprehensiveness: 8.7, uniqueness: 8.2, motion: 8.6, hireability: 7.8 } },
  { id: 19, slug: "launch-scrub", name: "Launch Scrub", thesis: "Scroll-scrubbed rocket launch timeline", stack: ["gsap", "scrub"], scores: { coolness: 8.8, comprehensiveness: 8.5, uniqueness: 8.5, motion: 9.0, hireability: 8.0 } },
  { id: 20, slug: "proof-mosaic", name: "Proof Mosaic", thesis: "Warm paper asymmetric masonry of evidence — uneven blocks, not card grid", stack: ["mosaic", "paper", "asym"], scores: { coolness: 7.9, comprehensiveness: 9.3, uniqueness: 9.1, motion: 5.5, hireability: 9.0 } },
  { id: 21, slug: "snap-chapters", name: "Snap Chapters", thesis: "Full-viewport snap chapters; one idea each", stack: ["snap", "framer"], scores: { coolness: 8.0, comprehensiveness: 8.0, uniqueness: 8.0, motion: 8.0, hireability: 7.8 } },
  { id: 22, slug: "particle-cv", name: "Particle CV", thesis: "Particles form name then explode into sections", stack: ["canvas", "particles"], scores: { coolness: 8.6, comprehensiveness: 8.5, uniqueness: 8.0, motion: 8.5, hireability: 7.5 } },
  { id: 23, slug: "aurora-vancouver", name: "Aurora Vancouver", thesis: "Northern lights over Vancouver skyline silhouette", stack: ["canvas", "aurora"], scores: { coolness: 9.0, comprehensiveness: 8.5, uniqueness: 9.0, motion: 8.5, hireability: 8.2 } },
  { id: 24, slug: "event-horizon", name: "Event Horizon", thesis: "Black-hole distortion lens on scroll content", stack: ["svg-filter", "warp"], scores: { coolness: 8.9, comprehensiveness: 8.0, uniqueness: 8.8, motion: 8.0, hireability: 7.5 } },
  { id: 25, slug: "telemetry-tape", name: "Telemetry Tape", thesis: "Satellite telemetry ticker + mission logs", stack: ["marquee", "mono"], scores: { coolness: 8.0, comprehensiveness: 8.5, uniqueness: 8.5, motion: 7.5, hireability: 7.8 } },
  { id: 26, slug: "credit-roll", name: "Credit Roll", thesis: "Film end-credits scroll of career", stack: ["credits", "slow"], scores: { coolness: 7.6, comprehensiveness: 8.3, uniqueness: 9.0, motion: 8.0, hireability: 7.5 } },
  { id: 27, slug: "solar-career", name: "Solar Career", thesis: "Interactive solar system — jobs as planets", stack: ["svg", "orbit"], scores: { coolness: 8.5, comprehensiveness: 8.5, uniqueness: 8.8, motion: 7.5, hireability: 8.0 } },
  { id: 28, slug: "blueprint-eng", name: "Blueprint Eng", thesis: "Cyan blueprint / engineering drawing aesthetic", stack: ["blueprint", "grid"], scores: { coolness: 7.8, comprehensiveness: 8.5, uniqueness: 8.5, motion: 5.5, hireability: 8.5 } },
  { id: 29, slug: "bauhaus-cv", name: "Bauhaus CV", thesis: "Primary color block composition — red/blue/yellow geometry, light ground", stack: ["bauhaus", "color", "blocks"], scores: { coolness: 8.5, comprehensiveness: 9.3, uniqueness: 9.5, motion: 5.0, hireability: 8.8 } },
  { id: 30, slug: "organic-nebula", name: "Organic Nebula", thesis: "Soft fluid gradients; organic blobs as sections", stack: ["blob", "soft"], scores: { coolness: 8.0, comprehensiveness: 8.5, uniqueness: 8.0, motion: 8.0, hireability: 7.8 } },
  { id: 31, slug: "star-chart", name: "Star Chart", thesis: "Monochrome navigational chart of skills/career", stack: ["mono", "map"], scores: { coolness: 8.3, comprehensiveness: 9.0, uniqueness: 9.0, motion: 7.0, hireability: 8.5 } },
  { id: 32, slug: "liquid-metal", name: "Liquid Metal", thesis: "Mercury morphing headlines and CTAs", stack: ["filter", "morph"], scores: { coolness: 8.4, comprehensiveness: 8.5, uniqueness: 8.5, motion: 8.0, hireability: 7.8 } },
  { id: 33, slug: "iso-rooms", name: "Iso Rooms", thesis: "Light isometric rooms you click through — lobby, archive, workshop, gallery", stack: ["iso", "rooms", "light"], scores: { coolness: 8.3, comprehensiveness: 9.2, uniqueness: 9.4, motion: 6.5, hireability: 8.5 } },
  { id: 34, slug: "warp-rail", name: "Warp Rail", thesis: "Vertical timeline with warp-speed connectors", stack: ["timeline", "svg"], scores: { coolness: 8.0, comprehensiveness: 9.0, uniqueness: 8.0, motion: 7.5, hireability: 8.5 } },
  { id: 35, slug: "agent-console", name: "Agent Console", thesis: "Chat-with-Serhii agent UI metaphor (static demo)", stack: ["chat", "ui"], scores: { coolness: 8.5, comprehensiveness: 8.5, uniqueness: 9.2, motion: 7.5, hireability: 8.0 } },
  { id: 36, slug: "case-immersion", name: "Case Immersion", thesis: "Light longform — one fullscreen chapter per company with full bullets", stack: ["case", "longform", "light"], scores: { coolness: 8.1, comprehensiveness: 9.4, uniqueness: 8.8, motion: 7.0, hireability: 9.2 } },
  { id: 37, slug: "swiss-space", name: "Swiss Grid", thesis: "Pure International Style — white, black, red, rigid 12-col grid", stack: ["swiss", "grid", "helvetica"], scores: { coolness: 7.2, comprehensiveness: 9.2, uniqueness: 8.8, motion: 6.0, hireability: 9.2 } },
  { id: 38, slug: "brutal-press", name: "Brutal Press", thesis: "Newsprint brutalism — white paper, black rules, stamp hire CTA", stack: ["brutal", "print", "light"], scores: { coolness: 8.2, comprehensiveness: 9.3, uniqueness: 9.2, motion: 5.5, hireability: 9.0 } },
  { id: 39, slug: "telescope", name: "Telescope", thesis: "Looking through a scope; focus rings reveal content", stack: ["mask", "focus"], scores: { coolness: 8.6, comprehensiveness: 8.5, uniqueness: 9.0, motion: 8.0, hireability: 7.8 } },
  { id: 40, slug: "cmd-palette", name: "Command Palette", thesis: "⌘K-first navigation; content as searchable cmds", stack: ["palette", "kbd"], scores: { coolness: 8.8, comprehensiveness: 9.0, uniqueness: 9.5, motion: 8.0, hireability: 8.5 } },
  { id: 41, slug: "story-chapters", name: "Story Chapters", thesis: "Illustrated scrollytelling chapters of a career", stack: ["story", "scroll"], scores: { coolness: 8.2, comprehensiveness: 8.5, uniqueness: 8.0, motion: 8.0, hireability: 8.2 } },
  { id: 42, slug: "journey-map", name: "Journey Map", thesis: "Geographic path Kyiv→Geneva→Italy→SF→Vancouver", stack: ["map", "path"], scores: { coolness: 8.3, comprehensiveness: 8.5, uniqueness: 9.0, motion: 7.5, hireability: 8.5 } },
  { id: 43, slug: "waveform", name: "Waveform", thesis: "Audio-visual waveform bars driven by scroll", stack: ["canvas", "wave"], scores: { coolness: 8.0, comprehensiveness: 8.0, uniqueness: 8.0, motion: 8.5, hireability: 7.5 } },
  { id: 44, slug: "origami", name: "Origami Fold", thesis: "Paper-fold page transitions between sections", stack: ["3d", "fold"], scores: { coolness: 8.4, comprehensiveness: 8.5, uniqueness: 8.5, motion: 8.5, hireability: 7.8 } },
  { id: 45, slug: "infinite-canvas", name: "Infinite Canvas", thesis: "Pan/zoom canvas of CV nodes (trackpad/mouse)", stack: ["canvas", "pan"], scores: { coolness: 8.8, comprehensiveness: 8.3, uniqueness: 9.5, motion: 8.2, hireability: 7.5 } },
  { id: 46, slug: "cover-series", name: "Cover Series", thesis: "Magazine cover stack — swipe/scroll covers", stack: ["covers", "stack"], scores: { coolness: 8.3, comprehensiveness: 8.5, uniqueness: 8.5, motion: 8.0, hireability: 8.0 } },
  { id: 47, slug: "dual-signal", name: "Dual Signal", thesis: "EN primary with subtle UA accent layer", stack: ["i18n", "layer"], scores: { coolness: 7.8, comprehensiveness: 9.0, uniqueness: 8.5, motion: 7.0, hireability: 8.5 } },
  { id: 48, slug: "agent-swarm", name: "Agent Swarm", thesis: "Visualize AI agent fleet building products", stack: ["particles", "agents"], scores: { coolness: 8.8, comprehensiveness: 8.5, uniqueness: 9.0, motion: 9.0, hireability: 8.0 } },
  { id: 49, slug: "goals-ring", name: "Goals Ring", thesis: "100 goals as orbital ring around identity", stack: ["goals", "ring"], scores: { coolness: 8.7, comprehensiveness: 8.7, uniqueness: 9.2, motion: 8.0, hireability: 8.1 } },
  { id: 50, slug: "champion-hybrid", name: "Champion Hybrid", thesis: "Best-of synthesis: warp hero + constellation + brief", stack: ["hybrid", "r3f", "gsap"], scores: { coolness: 9.5, comprehensiveness: 9.5, uniqueness: 8.5, motion: 9.0, hireability: 9.5 } },
];

export function composite(scores: NonNullable<VariantMeta["scores"]>): number {
  return (
    scores.coolness * 0.3 +
    scores.comprehensiveness * 0.2 +
    scores.uniqueness * 0.2 +
    scores.motion * 0.15 +
    scores.hireability * 0.15
  );
}

export function getVariant(id: number): VariantMeta | undefined {
  return variants.find((v) => v.id === id);
}

export function getChampion(): VariantMeta {
  return [...variants]
    .filter((v) => v.scores)
    .sort((a, b) => composite(b.scores!) - composite(a.scores!))[0];
}
