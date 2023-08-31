<template>
    <header>

        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{ name: 'homepage' }">BoolFolio</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-for="link in links" class="nav-item">
                            <router-link :to="{ name: link.route }" class="nav-link">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav>
            <ul>

            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    route: 'homepage',
                    name: 'Homepage'
                },
                {
                    route: 'about',
                    name: 'About Us'
                },
                {
                    route: 'projects-list',
                    name: 'Projects'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
header {
    li {

        list-style-type: none;
    }
}
</style>