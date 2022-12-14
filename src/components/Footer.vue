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
    position: relative;
    margin-top: 3rem;
    height: 3rem;
    background-color: #17191F;
    
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

@media screen and (min-width: 1441px) {
    .main__footer {
        margin-top: 10rem;
    }
}

@media screen and (max-width: 1440px) {
    .main__footer {
        margin-top: 10rem;
    }
}
</style>