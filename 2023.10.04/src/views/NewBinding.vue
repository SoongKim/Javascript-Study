<template>
    <div>
        &nbsp;
        <img v-bind:src="imgSrc" />
    </div>
    <div>
        &nbsp;
        <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
        &nbsp;
    </div>
    <div>
        &nbsp;
        <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 바인딩</div>
        &nbsp;
    </div>
    <div>
        &nbsp;
            <table>
                <thead>
                    <tr>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>카테고리</th>
                        <th>배송료</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(product,i) in productList">
                        <td>{{product.product_name}}</td>
                        <td>{{product.price}}</td>
                        <td>{{product.category}}</td>
                        <td>{{product.delivery_price}}</td>
                    </tr>
                </tbody>
            </table>
        &nbsp;
    </div>
    &nbsp;
    <div>
        <input type="text" v-model="valueText" />
        <button type="button" v-bind:disabled="valueText==''">Click</button>
    </div>
    &nbsp;
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
    </div>
    &nbsp;
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The Counter is {{counter}}</p>
    </div>
    &nbsp;
    <div>
        <button type="button" @click="setCount(7)">Set 7</button>
        <p> The Counter is : {{counters}}</p>
    </div>
    <!-- v-bind로 disabled=''지정 시 null값인 경우 클릭 불가, 값 입력 시 클릭 가능으로 기능 연결 -->
    &nbsp;
    <div>
        <select v-model="selectedValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="대전">대전</option>
            <option value="부산">부산</option>
        </select>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                textAreaValue:"강낭콩입니다.",
                imgSrc: "https://kr.vuejs.org/images/logo.png",
                styleObject:{
                    color: 'purple',
                    fontSize: '20px'
                },
                baseStyle: 'background-color:yellowgreen;width:100%;height:20px;',
                addStyel: 'color:darkred;font-weight:bold',
                productList:[
                    {
                        "product_name":"기계식키보드",
                        "price":25000,
                        "category":"노트북/태블릿",
                        "delivery_price":5000
                    },
                    {
                        "product_name":"무선마우스",
                        "price":12000,
                        "category":"노트북/태블릿",
                        "delivery_price":5000
                    },
                    {
                        "product_name":"아이패드",
                        "price":725000,
                        "category":"노트북/태블릿",
                        "delivery_price":5000
                    },
                    {
                        "product_name":"무선충전기",
                        "price":42000,
                        "category":"노트북/태블릿",
                        "delivery_price":5000
                    }
                ],
                valueText: "",
                type:'A',
                counter: 5,
                counters:3,
                selectedValue: ''
            };
        },
        methods:{
            increaseCounter(){
                this.counter = this.counter+1;
            },
            setCount(counters){
                this.counters = counters;
            },
            changeSelect(){
                alert(this.selectedValue);
            }
        }
    }
</script>
<style scoped>
    table
    {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width:100%;
    }
    td, th
    {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>