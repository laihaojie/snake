/*
 * @Author: your name
 * @Date: 2020-12-25 15:29:14
 * @LastEditTime: 2020-12-26 09:36:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \贪吃蛇\index.ts
 */


// class Snake {

//     public SnakeList: HTMLDivElement[] = []
//     public Head: HTMLDivElement
//     public direction: string = "ArrowRight"

//     constructor() {

//         this.Head = document.getElementById("item") as HTMLDivElement
//         this.Head.style.top = this.Head.offsetTop + 50 + "px"
//         this.Head.style.left = this.Head.offsetTop + 50 + "px"
//         this.SnakeList.push(this.Head)
//     }

//     get getSnakeList(): HTMLDivElement[] {
//         return this.SnakeList
//     }

//     set setSnake(item: HTMLDivElement) {
//         this.SnakeList.push(item)
//     }

//     set setdirection(direction: any) {
//         console.log(direction)
//         this.direction = direction
//     }

//     move() {
//         let top = this.SnakeList[0].offsetTop
//         let left = this.SnakeList[0].offsetLeft
//         for (var i = 0; i < this.SnakeList.length; i++) {
//             var item = this.SnakeList[i]
//             if (i == 0) {
//                 if (this.direction === "ArrowUp") {
//                     item.style.top = item.offsetTop - 50 + "px"
//                 } else if (this.direction === "ArrowDown") {
//                     item.style.top = item.offsetTop + 50 + "px"
//                 } else if (this.direction === "ArrowLeft") {
//                     item.style.left = item.offsetLeft - 50 + "px"
//                 } else if (this.direction === "ArrowRight") {
//                     item.style.left = item.offsetLeft + 50 + "px"
//                 }
//             } else {
//                 var ctop = this.SnakeList[i].offsetTop
//                 var cleft = this.SnakeList[i].offsetLeft
//                 this.SnakeList[i].style.top = top + "px"
//                 this.SnakeList[i].style.left = left + "px"
//                 top = ctop
//                 left = cleft
//             }
//         }
//     }


// }


// class Food {

//     private food: HTMLDivElement;

//     constructor() {
//         this.food = document.getElementById("food") as HTMLDivElement
//     }

//     // 生成随机数
//     random(m: number, n: number): number {
//         var num = Math.floor(Math.random() * (m - n) + n);
//         return num
//     }

//     // 随机生成食物
//     setFood() {
//         this.food.style.top = this.random(0, 10) * 50 + "px"
//         this.food.style.left = this.random(0, 10) * 50 + "px"
//     }
//     get getFood(): HTMLDivElement {
//         return this.food
//     }


// }

// class Map {

//     public map: HTMLDivElement;

//     public tips: HTMLDivElement

//     constructor() {
//         this.map = document.getElementById("box") as HTMLDivElement
//         this.tips = document.getElementById("zhezhao") as HTMLDivElement
//     }

//     createdDiv(div: HTMLDivElement): void {
//         this.map.appendChild(div)
//     }
// }


// class Main {

//     public map
//     public food
//     public snake
//     public interval: any
//     public hello:string = "你好"

//     constructor() {
//         this.map = new Map()
//         this.food = new Food()
//         this.snake = new Snake()
//     }



//     run(): void {

//         this.interval = setInterval(() => {
//             this.snake.move()
//             this.isover(this.snake.getSnakeList,this.interval)
//             this.iseat(this.snake.getSnakeList[0], this.food.getFood)
//         }, 300)
//         document.addEventListener("keydown", (e): void => {
//             const type: string = e.key
//             if (type === "ArrowUp") {
//                 console.log(this.snake.getSnakeList)
//                 this.snake.setdirection("ArrowUp")
//             } else if (type === "ArrowDown") {
//                 this.snake.setdirection("ArrowDown")
//             } else if (type === "ArrowLeft") {
//                 this.snake.setdirection("ArrowLeft")
//             } else if (type === "ArrowRight") {
//                 this.snake.setdirection("ArrowRight")
//             }
//         })

//     }

//     isover(itemlist: HTMLDivElement[], interval: any) {

//         const head = this.snake.Head

//         if (head.offsetTop < 0 || head.offsetLeft < 0 || head.offsetLeft >= 500 || head.offsetTop >= 500) {
//             clearInterval(this.interval)
//             this.map.tips.style.display = "block"
//         }
//         for (var i = 3; i < itemlist.length; i++) {
//             if (head.offsetTop == itemlist[i].offsetTop && head.offsetLeft == itemlist[i].offsetLeft) {
//                 clearInterval(this.interval)
//                 this.map.tips.style.display = "block"
//             }
//         }
//     }

//     // 判断是否吃到食物
//     iseat(item: HTMLDivElement, food: HTMLDivElement): void {
//         if ((item.offsetLeft == food.offsetLeft) && (item.offsetTop == food.offsetTop)) {
//             var item = document.createElement("div")
//             item.id = "item"
//             item.style.top = food.offsetTop + "px"
//             item.style.left = food.offsetLeft + "px"
//             this.map.map.appendChild(item)
//             this.snake.getSnakeList.push(item)
//             this.map.createdDiv(this.food.getFood)
//         }
//     }
// }


// const main = new Main()

// main.run()








