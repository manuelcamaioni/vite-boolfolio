<template>
    <main>
        <div class="container-fluid d-flex flex-wrap justify-content-between">
            <div class="card mb-3" v-for="project in projects">
                <div class="card-header">
                    <img :src="project.image" class="card-img-top" alt="not found">
                </div>

                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>

                    <p class="card-text">
                        {{ project.description }}
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ project.type.name }}</li>
                    <li class="list-group-item" v-if="project.technologies.length > 0">
                        <span v-for="technology in project.technologies">{{ technology.name }}</span>
                    </li>
                    <li class="list-group-item" v-else>No technology registered.</li>
                    <li class="list-group-item"><i>{{ project.date }}</i></li>
                </ul>

            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            projects: []
        }
    },

    methods: {
        getProjects() {
            axios.get(this.apiUrl)
                .then((response) => {
                    // handle success
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data
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

<style lang="scss" scoped>
div.card {
    width: calc(100% / 3 - 1rem);

    .card-header {
        padding: 0;
    }

    ul {
        list-style-type: none;
    }
}
</style>