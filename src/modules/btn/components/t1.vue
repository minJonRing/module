<template>
    <div class="btn btn-1">
        <div class="button">
            按钮
        </div>
    </div>
</template>

<style scoped lang="scss">
.btn-1 {

    .button {
        /*想对定位*/
        position: relative;
        width: 200px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 24px;
        color: #fff;
        background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
        background-size: 400%;
        border-radius: 30px;
        cursor: pointer;
        z-index: 1;

        &::before {
            content: "";
            position: absolute;
            top: -5px;
            left: -5px;
            bottom: -5px;
            right: -5px;
            background: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
            background-size: 400%;
            border-radius: 30px;
            z-index: -1;
            filter: blur(20px);
        }

        &:hover {
            animation: streamer 8s ease-in-out infinite;

            &::before {
                animation: streamer 8s ease-in-out infinite;
            }

            @keyframes streamer {
                100% {
                    background-position: -400%
                }

            }
        }
    }
}
</style>
