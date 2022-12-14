<template>
    <div class="home-page__header">
        <router-link to="/mainlogoff" class="home-page__header_button_router">
            <button class="home-page__header_button">К валютам</button>
        </router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.home-page__header {
    width: 10rem;
    height: 3rem;
    position: absolute;
    top: 1rem;
    right: 8rem;
    border-radius: 0.75rem;
    margin-right: 14rem;

    &_button {
        height: 3rem;
        width: 10rem;
        margin: auto;
        font-size: 1.25rem;
        color: white;
        border: none;
        border-radius: 0.75rem;
        cursor: pointer;
        font-family: 'Comic Neue', cursive;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.home-page__header_button_router {
    text-decoration: none;
}

.home-page__header:hover {
    opacity: .7;
    transition: .2s;
}
</style>