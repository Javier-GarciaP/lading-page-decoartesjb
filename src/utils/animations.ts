/**
 * Animation Utilities for Professional Decorador Website
 * Provides helpers for creating smooth, performant animations
 */

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Apply stagger delay to a group of elements
 * @param elements - NodeList or Array of elements
 * @param baseDelay - Base delay in milliseconds
 * @param increment - Delay increment per element
 */
export const applyStagger = (
    elements: NodeListOf<Element> | Element[],
    baseDelay: number = 0,
    increment: number = 100
): void => {
    if (prefersReducedMotion()) return;

    elements.forEach((el, index) => {
        if (el instanceof HTMLElement) {
            el.style.transitionDelay = `${baseDelay + (index * increment)}ms`;
        }
    });
};

/**
 * Parallax effect handler
 * @param element - Element to apply parallax to
 * @param speed - Parallax speed (0.1 = slow, 1 = fast)
 */
export const initParallax = (
    element: HTMLElement,
    speed: number = 0.5
): (() => void) => {
    if (prefersReducedMotion()) return () => { };

    const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;

        // Only apply parallax when element is in viewport
        if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
            const yPos = (scrolled - elementTop) * speed;
            element.style.transform = `translateY(${yPos}px)`;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Return cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Animated counter for numbers
 * @param element - Element to animate
 * @param target - Target number
 * @param duration - Duration in milliseconds
 * @param suffix - Optional suffix (e.g., '+', '%')
 */
export const animateCounter = (
    element: HTMLElement,
    target: number,
    duration: number = 2000,
    suffix: string = ''
): void => {
    if (prefersReducedMotion()) {
        element.textContent = `${target}${suffix}`;
        return;
    }

    const start = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeProgress);

        element.textContent = `${current}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    };

    requestAnimationFrame(updateCounter);
};

/**
 * 3D Tilt effect following mouse
 * @param element - Element to apply tilt to
 * @param maxTilt - Maximum tilt angle in degrees
 */
export const init3DTilt = (
    element: HTMLElement,
    maxTilt: number = 10
): (() => void) => {
    if (prefersReducedMotion()) return () => { };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * maxTilt;
        const rotateY = ((x - centerX) / centerX) * -maxTilt;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Ensure smooth transitions
    element.style.transition = 'transform 0.3s ease-out';

    // Return cleanup function
    return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
    };
};

/**
 * Intersection Observer with custom options
 * @param callback - Function to call when element intersects
 * @param options - IntersectionObserver options
 */
export const createScrollObserver = (
    callback: (entry: IntersectionObserverEntry) => void,
    options: IntersectionObserverInit = {}
): IntersectionObserver => {
    const defaultOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
        ...options,
    };

    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback(entry);
            }
        });
    }, defaultOptions);
};

/**
 * Shimmer/shine effect that runs once
 * @param element - Element to apply shimmer to
 */
export const applyShimmer = (element: HTMLElement): void => {
    if (prefersReducedMotion()) return;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';

    const shimmer = document.createElement('div');
    shimmer.style.cssText = `
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 2s ease-in-out;
    pointer-events: none;
  `;

    element.appendChild(shimmer);

    setTimeout(() => {
        shimmer.remove();
    }, 2000);
};

/**
 * Floating animation for elements
 * @param element - Element to float
 * @param amplitude - Vertical movement in pixels
 * @param duration - Duration of one cycle in seconds
 */
export const initFloating = (
    element: HTMLElement,
    amplitude: number = 10,
    duration: number = 3
): void => {
    if (prefersReducedMotion()) return;

    element.style.animation = `float ${duration}s ease-in-out infinite`;

    // Inject keyframes if not already present
    if (!document.querySelector('#float-keyframes')) {
        const style = document.createElement('style');
        style.id = 'float-keyframes';
        style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-${amplitude}px); }
      }
    `;
        document.head.appendChild(style);
    }
};
