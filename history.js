Vue.component('history-component', {
    template: `
    <div class="history card">
    <h2>History</h2>
    <div class="flex-container-row">
        <button type="button" v-on:click="reverseData">{{status}}</button>
        
        <button type="button" v-on:click="sliceData(3)">3</button>
        <button type="button" v-on:click="sliceData(5)">5</button>
        <button type="button" v-on:click="sliceData(10)">10</button>
        <button type="button" v-on:click="sliceData('all')">All</button>

    </div>
    
    <table>
        <thead>
            <tr>
                <th>First Number</th>
                <th>Operator</th>
                <th>Second Number</th>
                <th>Result</th>
            </tr>
            
            <tr v-for="c of this.$root.history">
                <td>{{c.firstNumber}}</td>
                <td>{{c.operator}}</td>
                <td>{{c.secondNumber}}</td>
                <td>{{c.results}}</td>
            </tr>
        </thead>
        <tbody id="historyList"></tbody>
    </table>
</div>
`,
data: function(){
    return{
        status: "Ascending"
    }
    
},
methods: {
    reverseData: function(){
        if(this.status === "Ascending"){
            this.$root.history.reverse()
            this.status = "Descending"
        }else{
            this.$root.history.reverse()
            this.status = "Ascending"
        }
    },
    sliceData: function(num){
        if(num === 3){
            this.$root.history.slice(0,4)
        }else{
            this.$root.history.slice(0,6)
        }          
    },
    
}
})