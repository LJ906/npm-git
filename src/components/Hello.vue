<template>
    <div @click="clickMessage"  >
        <span :style="{'color': titleColor}">这里是Hello组件</span>
        传的参数message: {{message}}
    </div>
</template>

<script>
export default {
    props: {
        message: String, 
        titleColor: String
    }, 
    methods: {
        clickMessage () {
            this.$emit('click', `传的参数message: ${this.message}` )
        }
    },
}
</script>

<style>

</style>
