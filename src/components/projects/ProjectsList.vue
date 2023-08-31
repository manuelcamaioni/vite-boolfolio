<template>
    <div class="container-fluid d-flex flex-wrap justify-content-between">
        <SingleProject :project="project" v-for="project in projects" />
    </div>
</template>

<script>
import SingleProject from "./SingleProject.vue";
export default {
    components: {
        SingleProject
    },
    props: {
        projects: Array
    },

    methods: {
        check() {
            console.log(this.projects);
        }
    },

    mounted() {
        this.check();
    }

}
</script>

<style lang="scss" scoped></style>