Vue.component('calculator-component', {
    template: 
    `
    <div class="flex-container-column card">
        <div class="display">
            <h1 id="displayNumber" >{{this.$root.displayNumber}}</h1>
        </div>
        <div class="flex-container-row">
            <div class="button" v-on:click="getDigit('7')">7</div>
            <div class="button" v-on:click="getDigit('8')">8</div>
            <div class="button" v-on:click="getDigit('9')">9</div>
            <div class="button negative" v-on:click="getOperator('/')">/</div>
        </div>
        <div class="flex-container-row">
            <div class="button" v-on:click="getDigit('4')">4</div>
            <div class="button" v-on:click="getDigit('5')">5</div>
            <div class="button" v-on:click="getDigit('6')">6</div>
            <div class="button operator" v-on:click="getOperator('x')">x</div>
        </div>
        <div class="flex-container-row">
            <div class="button" v-on:click="getDigit('1')">1</div>
            <div class="button" v-on:click="getDigit('2')">2</div>
            <div class="button" v-on:click="getDigit('3')">3</div>
            <div class="button operator" v-on:click="getOperator('+')">+</div>
        </div>
        <div class="flex-container-row">
            <div class="button" v-on:click="getDigit('0')">0</div>
            <div class="button clear" v-on:click="clearCalc">C</div>
            <div class="button equals" v-on:click="calculation">=</div>
            <div class="button operator" v-on:click="getOperator('-')">-</div>
        </div>
    </div>
    `,
    created(){
        this.$root.history = JSON.parse(localStorage.getItem('historyCalculator')) || []
    },
    methods: {
        getDigit: function(digit){
            if(this.$root.displayNumber === ""){
                this.$root.displayNumber = digit
            }else {
                this.$root.displayNumber += digit
            }
            return this.$root.displayNumber
        },
        getOperator: function(op){
            if(this.$root.displayNumber === ""){
                return this.$root.displayNumber
            }else{
                this.$root.operator = op
                this.$root.firstNum = parseInt(this.$root.displayNumber)
                this.$root.displayNumber = ""
            }
        },
        
        calculation: function(){
            let result = 0
            this.$root.secondNum = parseInt(this.$root.displayNumber)

            if(this.$root.operator === null){
                return this.$root.displayNumber
            }

            if(this.$root.operator === '+'){
                this.$root.displayNumber = this.$root.firstNum + this.$root.secondNum
            }else if(this.$root.operator === '-'){
                this.$root.displayNumber = this.$root.firstNum - this.$root.secondNum
            }else if(this.$root.operator === 'x'){
                this.$root.displayNumber = this.$root.firstNum * this.$root.secondNum
            }else{
                this.$root.displayNumber = this.$root.firstNum / this.$root.secondNum
            }

            result = this.$root.displayNumber 

            const data = {
                firstNumber : this.$root.firstNum,
                secondNumber : this.$root.secondNum,
                operator : this.$root.operator,
                results : result
            }

            this.$root.history.push(data)
            localStorage.setItem('historyCalculator', JSON.stringify(this.$root.history))

            this.$root.firstNum = null
            this.$root.secondNum = null
        },
        clearCalc: function(){
            this.$root.displayNumber = ""
            this.$root.firstNum = null
            this.$root.secondNum = null
            this.$root.operator = null
        }
    }
})