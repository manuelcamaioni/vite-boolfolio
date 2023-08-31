<template>
    <main>

        <ProjectsList :projects="projects" />

    </main>
</template>

<script>
import axios from 'axios';
import ProjectsList from "./projects/ProjectsList.vue"
export default {
    data() {
        return {
            apiUrl: 'http://localhost:8000/api/projects',
            projects: []
        }
    },

    components: {
        ProjectsList
    },

    methods: {
        getProjects() {
            axios.get(this.apiUrl)
                .then((response) => {
                    // handle success
                    // console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                    console.log(response.data);

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

        },


    },
    created() {
        this.getProjects();
    }
}
</script>

<style lang="scss" scoped></style>