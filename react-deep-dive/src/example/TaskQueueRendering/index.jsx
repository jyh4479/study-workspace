const TaskQueueRendering = () => {

    console.log('a');

    setTimeout(() => {
        console.log('task queue');
    })

    Promise.resolve().then(() => {
        console.log('micro task queue');
    })

    window.requestAnimationFrame(() => {
        console.log('repaint 전');
    })
    
    return (
        <div>실행</div>
    )
}

export default TaskQueueRendering;