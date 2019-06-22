<template>
    <div>
        bag1组件内部
        <span  >{{message}}</span>
    </div>
</template>

<script>
export default {
    props: {
        message: String
    }, 
    // methods: {
    //     clickMessage () {
    //         his.$emit('click', `传的参数message: ${this.message}` )
    //     }
    // }
}
</script>

<style>

</style>
