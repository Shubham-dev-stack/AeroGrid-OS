/**
 * Global scroll progress state holder for 60fps WebGL synchronization
 */
export const scrollState = {
  progress: 0, // 0.0 to 1.0
  velocity: 0,
  targetProgress: 0,
};

export const setScrollProgress = (progress: number, velocity: number = 0) => {
  scrollState.progress = Math.max(0, Math.min(1, progress));
  scrollState.velocity = velocity;
};

export const scrollToProgress = (targetProgress: number) => {
  if (typeof window === "undefined") return;
  const totalScroll = Math.max(
    1,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const targetY = Math.max(0, Math.min(1, targetProgress)) * totalScroll;
  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
};
