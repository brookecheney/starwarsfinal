<template>

<div>
    <button
        id="on"
        @click="switched(true)"
        :class="{active: !value}">Under 18</button>

    <button 
        id="off"
        @click="switched(false)"
        :class="{active: !value}">18 & Over</button>
</div>        


</template>


<script>

export default {
   
    props: ['value'],
    methods: {
        switched(isOn) {
                this.$emit('input', isOn);
        }
    }
}

</script>

