export declare const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
export declare const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
export declare const invlerp = (x, y, a) => clamp((a - x) / (y - x));
export declare const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));