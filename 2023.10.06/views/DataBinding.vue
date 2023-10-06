<template>
    <div>
        <div>{{htmlString}}</div>
        <!--htmlString을 직접 문자열로 출력하고 싶을 때는 윈시 바인딩. {{}}를 사용한다.-->
        <div v-html="htmlString"></div>
        <!--htmlString을 html로써 출력하고 싶을 때는 v-html 태그를 사용한다.-->
        <input type="text" v-model="valueModel"/>
        <!--문자를 담는 textarea. 한 줄씩 출력한다.-->
        &nbsp;
        <input type="number" v-model.number="numberModel"/>
        <!--숫자를 담는 textbox. 위아래 화살표로 1 단위씩 증감이 가능하다.-->
    </div>
    &nbsp;
    <div>
        <textarea v-model="message"></textarea>
        <!--여러 줄의 문자를 출력할 수 있는 message.(TextArea)-->
    </div>
    &nbsp;
    <div>
        <select v-model="city">
            <option value="01">서울</option>
            <option value="02">부산</option>
            <option value="064">제주</option>
        </select>
        <!--여러 개의 선택 가능 메뉴를 늘어놓는 Select Box.
            v-model에 설정한 value를 지니는 옵션이 디폴트로 놓인다.-->
    </div>
    <!--&nbsp;
    <div>
        <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no"/>{{ checked }}</label>
        클릭을 통해 참/거짓을 판별하는 checkbox.
            v-model에 기입한 값을 디폴트로 지닌다.
    </div>
    &nbsp;-->
    <div>
        <label><input type="checkbox" value="서울" v-model="checked">서울</label>
        <label><input type="checkbox" value="대전" v-model="checked">대전</label>
        <label><input type="checkbox" value="부산" v-model="checked">대구</label>
        <br>
        <span> 체크한 지역 : {{checked}}</span>
        <!-- binding 역시 가능하다.-->
    </div>
    &nbsp;
    <div>
        <label><input type="radio" v-bind:value="radio01" v-model="picked">서울</label>
        <label><input type="radio" v-bind:value="radio02" v-model="picked">대전</label>
        <label><input type="radio" v-bind:value="radio03" v-model="picked">부산</label>
        <br>
        <span>선택한 지역:{{ picked }}</span>
    </div>
    &nbsp;
    <div>
        <img v-bind:src="imgSrc" />
    </div>
    &nbsp;
    <div>
        <input type="text" v-model="textValue" />
        <button type="button" id="btnClick" v-bind:disabled="textValue== ''">Click</button>
    </div>
    &nbsp;
    <span>{{textValue}}</span>
    &nbsp;
    <div Class="container" v-bind:class="{
        'active':isActive,
        'text-red':hasError
    }">Class Bind</div>
</template>
<script>
    export default{
        data(){
            return {
                htmlString : '<p style = "color:red;">This is a red string</p>',
                valueModel : 'South Korea',
                numberModel : 3,
                message : "여러 줄을 입력할 수 있는 textarea 입니다.",
                city:"064",
                checked:[],
                picked:'',
                radio01:'서울',
                radio02:'대전',
                radio03:'부산',
                imgSrc: "https://kr.vuejs.org/images/logo.png",
                textValue:"",
                isActive:true,
                hasError:false
            };
        }
    }
</script>
<style scoped>
    container{
        width:100%;
        height:200px;
    }
    .active{
        background-color: yellowgreen;
        font-weight: bold;
    }
    .text-red{
        background-color: grey;
        color:blueviolet;
    }

</style>