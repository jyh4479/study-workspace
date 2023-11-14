const JSX = () => {
    return (
        true ? <div test={123}>123</div> : <span test={123}>123</span>
    )
}

// const JSX = () => {
//     return createElement(true ? 'div' : 'span', {test: 123}, 123);
// }

export default JSX;