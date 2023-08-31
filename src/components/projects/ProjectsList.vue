<template>
    <div class="container-fluid d-flex flex-wrap justify-content-between">
        <SingleProject :project="project" v-for="project in projects"
            @click="$router.push({ name: 'show-project', params: { id: project.id } })" />
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

    },



}
</script>

<style lang="scss" scoped></style>