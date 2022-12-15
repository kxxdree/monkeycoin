<template>
    <div class="main__footer">
        <div class="main__footer_container">
            <a class="main__footer_container_text main__footer_container_text_link" href="#">© MonkeyCode</a>
            <a class="main__footer_container_text main__footer_container_text_link" href="#">Немного о нас</a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.main__footer {
    display: flex;
    margin-top: 0;
    height: 3rem;
    background-color: #17191F;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    &_container {
        display: flex;
        justify-content: space-between;
        margin: auto 10rem;
        width: 100%;
        background-color: #17191F;


        &_text {
            color: white;
            opacity: .2;
            font-size: 1.5rem;
            background: none;
        }
    }
}

.main__footer_container_text_link {
    text-decoration: none;
}

.main__footer_container_text_link:hover {
    opacity: .7;
    transition: .2s;
}

// @media screen and (height: 100%) {
//     .main__footer {
//         position: absolute;
//         bottom: 0;
//         left: 0;
//         width: 100%;
//     }
// }

@media screen and (max-height: 1440px) {
    .main__footer {
        position: relative;
    }
}
</style>