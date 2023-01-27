const backgroundPlugin = {
    id: 'background',
    beforeDraw: (chart, args, opts) => {
        if (!opts.color) {
            return;
        }
        const {
            ctx,
            chartArea
        } = chart;
        ctx.fillStyle = opts.color;
        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight)
    }
}

export default backgroundPlugin;