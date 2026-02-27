import { create } from 'zustand';

const useMaacbookStore = create((set) => ({
    color : "#2e2c2e",
    setColor: (color) => set({color}),

    scale : 0.08,
    setScale: (scale) => set({scale}),

    reset : () => set({
        color : "#2e2c2e",
        scale : 0.08,
    })
}))

export default useMaacbookStore; 