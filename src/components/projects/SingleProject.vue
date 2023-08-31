<template>
    <div class="card mb-3" :project="project">
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
</template>

<script>
export default {
    props: {
        project: Object
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