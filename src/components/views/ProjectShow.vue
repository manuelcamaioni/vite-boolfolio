<template>
    <SingleProject :project="project" v-if="project" />
</template>

<script>
import axios from 'axios';
import SingleProject from '../projects/SingleProject.vue';

export default {
    components: {
        SingleProject,
    },

    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000',
            project: false,
        }
    },
    methods: {
        getSingleProject() {
            console.log(this.$route.params.id);
            axios.get(`${this.apiUrl}/api/projects/${this.$route.params.id}`).then((response) => {
                console.log(response);
                this.project = response.data.results;
            }).catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    },
    components: { SingleProject },
    created() {
        this.getSingleProject();
    }
}
</script>

<style lang="scss" scoped></style>