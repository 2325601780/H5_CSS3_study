// 鼠标控制视频倍速播放
// 1. 鼠标控制滑块的高度
// 2. 获取到滑块这个容器
// 3. 鼠标移动控制滑块的高度
// 4. 监听鼠标在白色容器的移动事件

const speedBar = document.querySelector('.speed-bar');
const speed = document.querySelector('.speed');
const video = document.querySelector('video');

speed.addEventListener('mousemove', function (e){
    //修改bar的高度
    //获取鼠标在y轴的变化
    const y = e.pageY - speed.offsetTop;  //鼠标在y轴的变化
    const percent = y / speed.offsetHeight;
    speedBar.style.height = Math.round(percent * 100) + '%';
    //文本修改
    const min = 0.4;
    const max = 4;
    const playBackRate = min + percent * (max - min);
    speedBar.textContent = playBackRate.toFixed(2) + 'x';

    video.playbackRate = playBackRate;
})