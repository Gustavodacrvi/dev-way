<template>
    <button class="Button">{{ value }}</button>
</template>

<script>

export default {
    props: ['value'],
}

</script>

<style scoped>

.Button {
    border: none;
    padding: 14px 38px;
    font-size: 1.1em;
    border-radius: 6px;
    background-color: orange;
    color: white;
    box-shadow: 0 2px 6px orange;
}

</style>
