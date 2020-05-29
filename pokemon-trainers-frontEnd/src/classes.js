// class CurrentTime {
//     constructor(targetId){
//         this.targtEl = document.getElementById(targetId)
//         this.targetEl.innerText = this.render()

//         setInterval(() => {
//             this.targetEl.innerText = this.render()
//         }, 1000)
//     }

//     render(){
//         const currentTime = new Date().toLocaleTimeString()
//         return `The current time is ${currentTime}`
//     }
// }