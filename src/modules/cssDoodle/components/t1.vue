<template>
    <div class="t t-1">
        <svg style="width: 0; height:0">
            <filter id="filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </svg>
        <css-doodle click-to-update>
            :doodle {
            @grid: 80x1 / 100% 100%;
            @min-size: 100px;
            filter: url(#filter);
            will-change: transform;
            animation: r 23s linear infinite;
            }

            @size: 100% 6%;
            position: absolute;
            top: 47%;
            transform: rotate(@r(360deg));
            perspective: 200px;

            :after {
            content: '';
            position: absolute;
            @size: @r(10px);
            will-change: transform;
            animation: cycle @r(2s, 8s) linear infinite;
            animation-delay: -@r(100s);
            background: #fff8;
            box-shadow: @m3(0 0 calc(.5vmin + 5px) #fff);
            --trans: scaleX(@r(.1, 4)) translateZ(60px);
            transform: rotateY(0) @var(--trans);
            }
            @keyframes cycle {
            to {
            transform: rotateY(@p(-1turn, 1turn)) @var(--trans);
            }
            }
            @keyframes r {
            to { transform: rotate(@p(-1turn, 1turn)) }
            }
        </css-doodle>
    </div>
</template>
<script>
import { VueCssDoodle } from '@luxdamore/vue-css-doodle';
export default {
    components: {
        VueCssDoodle
    },
}
</script>
<style scoped lang="scss">
.t-1 {
    width: 100%;
    height: 200px;
}
</style>
