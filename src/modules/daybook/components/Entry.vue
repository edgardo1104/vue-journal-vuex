<template>
    <div 
        class="entry-container pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 1 }})"
        >
        <!-- Titulo -->
        <div class="entry-tittle d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, martes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, tempora alias nisi nam vel ut est qui at nostrum autem, ex eos eligendi porro consequatur dignissimos, corrupti aliquam. Facere, eaque.
        </div>
    </div>
</template>

<script >
export default {
    name: 'EntryComponent'
}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}

</style>
