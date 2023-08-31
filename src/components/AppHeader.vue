<template>
    <header>
        <nav>
            <ul>
                <li v-for="link in links">
                    <router-link :to="{ name: link.route }">
                        {{ link.name }}
                    </router-link>
                </li>
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

<style lang="scss" scoped></style>