<template>
    <main>
        <div class="card">

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

        }

    },
    created() {
        this.getProjects();
    }
}
</script>

<style lang="scss" scoped></style>