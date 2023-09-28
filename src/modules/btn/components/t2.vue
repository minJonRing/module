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
        background: linear-gradient(to right, #03a9f4, #f441a5);
        z-index: 1;
        cursor: pointer;
        transition: all .3s;
        -webkit-transition: all .3s;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: -120%;
            // left: 0%;
            width: 100%;
            height: 100%;
            background-image: -webkit-linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
            transform: skewx(-25deg);
            // filter: blur(20px);
        }

        &:hover {

            &::before {
                transition: all 600ms ease-in-out;
                left: 100%;
            }

        }
    }
}
</style>
