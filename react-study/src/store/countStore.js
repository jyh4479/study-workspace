import create from "zustand";

const countStore = create(set => ({
    count: 0,
    addCount: () => set(state => ({count: state.count + 1})),
}));

export default countStore;
