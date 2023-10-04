<template>
    <div>
        <img v-bind:src="srcImg">
    </div>
    &nbsp;
    영문 성함을 입력해주세요.
    &nbsp;
    <div>
        &nbsp;
        <input type="textarea" v-model="firstName" /> | 
        <input type="textarea" v-model="lastName" />
        &nbsp;
    </div>
    <div>
        <input type="button" @click="NameClicked(this.firstName, this.lastName)" />
        <p> Your Full Name is {{FullName}}</p>
    </div>
</template>
<script>
    export default
    {
        data()
        {
            return{
                srcImg:"https://kr.vuejs.org/images/logo.png",
                firstName: '',
                lastName: '',
                FullName: ''
            };
        },
        computed:
        {
            NameClicked()
            {
                this.firstName = firstName;
                this.lastName = lastName;
                this.FullName = this.firstName + ' '+ this.lastName;
                return this.FullName;
            }
        }
    }
</script>