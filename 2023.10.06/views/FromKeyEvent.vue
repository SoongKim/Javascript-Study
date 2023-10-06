<template>
    <div>
        <h1>FullName: {{fullName}}</h1>
        <button type="button" @click="changeName">변경</button>
    </div>
    &nbsp;
    <div>
        <h1>{{ firstName + ' ' + lastName }}</h1>
        <h1>{{ getfullName }}</h1>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                firstName:'Seungwon',
                lastName: 'Go',
                fullName: ''
            };
        },
        watch:{
            firstName(){
                this.fullName = this.firstName + ' ' + this.lastName;
            },
            lastName(){
                this.fullName = this.firstName + ' ' + this.lastName;
            }
        },
        /* 항상 주의하자. method가 아니라, methods다. */
        methods:{
            changeName(){
                this.firstName = 'Eunsol';
            }
        },
        computed:{
            getfullName(){
                return this.firstName + ' ' + this.lastName;
            }
        }
    }
</script>