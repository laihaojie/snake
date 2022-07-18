
class Snake {

  public SnakeList: HTMLDivElement[] = []
  public Head: HTMLDivElement

  constructor(direction: string) {

    this.Head = document.getElementById("item") as HTMLDivElement
    this.Head.style.top = this.Head.offsetTop + 50 + "px"
    this.Head.style.left = this.Head.offsetTop + 50 + "px"
    if (direction === "ArrowUp") {
      this.Head.style.transform = 'rotate(180deg)';
    } else if (direction === "ArrowDown") {
      this.Head.style.transform = 'rotate(0deg)';
    } else if (direction === "ArrowLeft") {
      this.Head.style.transform = 'rotate(90deg)';
    } else if (direction === "ArrowRight") {
      this.Head.style.transform = 'rotate(270deg)';
    }
    this.SnakeList.push(this.Head)
  }

  get getSnakeList(): HTMLDivElement[] {
    return this.SnakeList
  }

  set setSnake(item: HTMLDivElement) {
    this.SnakeList.push(item)
  }

  move(direction: string) {

    let top = this.SnakeList[0].offsetTop
    let left = this.SnakeList[0].offsetLeft
    for (var i = 0; i < this.SnakeList.length; i++) {
      var item = this.SnakeList[i]
      if (i == 0) {
        if (direction === "ArrowUp") {
          this.Head.style.transform = 'rotate(180deg)';
          item.style.top = item.offsetTop - 50 + "px"
        } else if (direction === "ArrowDown") {
          this.Head.style.transform = 'rotate(0deg)';
          item.style.top = item.offsetTop + 50 + "px"
        } else if (direction === "ArrowLeft") {
          this.Head.style.transform = 'rotate(90deg)';
          item.style.left = item.offsetLeft - 50 + "px"
        } else if (direction === "ArrowRight") {
          this.Head.style.transform = 'rotate(270deg)';
          item.style.left = item.offsetLeft + 50 + "px"
        }
      } else {
        var ctop = this.SnakeList[i].offsetTop
        var cleft = this.SnakeList[i].offsetLeft
        this.SnakeList[i].style.top = top + "px"
        this.SnakeList[i].style.left = left + "px"
        top = ctop
        left = cleft
      }
    }
    // Callback()
  }


}


class Food {

  private food: HTMLDivElement;

  constructor() {
    this.food = document.getElementById("food") as HTMLDivElement
    this.setFood()
  }

  // 生成随机数
  random(m: number, n: number): number {
    var num = Math.floor(Math.random() * (m - n) + n);
    return num
  }

  // 随机生成食物
  setFood() {
    this.food.style.top = this.random(0, 10) * 50 + "px"
    this.food.style.left = this.random(0, 10) * 50 + "px"
  }
  get getFood(): HTMLDivElement {
    return this.food
  }


}

class Map {

  public map: HTMLDivElement;

  public tips: HTMLDivElement

  constructor() {
    this.map = document.getElementById("box") as HTMLDivElement
    this.tips = document.getElementById("zhezhao") as HTMLDivElement
  }

  createdDiv(div: HTMLDivElement): void {
    this.map.appendChild(div)
  }
}


class Main {

  public Time: number = 300 // 移动间隔时间
  public map
  public food
  public snake
  public interval: any
  public direction: string = "ArrowRight"
  public hello: string = "nihao"

  constructor() {
    this.map = new Map()
    this.food = new Food()
    this.snake = new Snake(this.direction)
  }



  run(): void {
    this.interval = setInterval(() => {
      this.snake.move(this.direction)
      this.isover(this.snake.getSnakeList, this.interval)
      this.iseat(this.snake.getSnakeList, this.food.getFood)
    }, this.Time)
    document.addEventListener("keydown", (e): void => {
      const type: string = e.key
      if (type === "ArrowUp") {
        if (this.direction != "ArrowDown") {
          this.direction = "ArrowUp"
        }
      } else if (type === "ArrowDown") {
        if (this.direction != "ArrowUp") {
          this.direction = "ArrowDown"
        }
      } else if (type === "ArrowLeft") {
        if (this.direction != "ArrowRight") {
          this.direction = "ArrowLeft"
        }
      } else if (type === "ArrowRight") {
        if (this.direction != "ArrowLeft") {
          this.direction = "ArrowRight"
        }
      }
    })

  }

  // 判断是否游戏结束
  isover(itemlist: HTMLDivElement[], interval: any): void {
    const head = this.snake.Head
    if (head.offsetTop < 0 || head.offsetLeft < 0 || head.offsetLeft >= 500 || head.offsetTop >= 500) {
      clearInterval(this.interval)
      head.style.display = "none"
      this.map.tips.style.display = "block"
      return
    }
    for (var i = 1; i < itemlist.length; i++) {
      if (head.offsetTop == itemlist[i].offsetTop && head.offsetLeft == itemlist[i].offsetLeft) {
        clearInterval(this.interval)
        head.style.display = "none"
        this.map.tips.style.display = "block"
      }
    }
  }

  // 判断是否吃到食物
  iseat(snakeList: HTMLDivElement[], food: HTMLDivElement): void {
    var item = snakeList[0]
    if ((item.offsetLeft == food.offsetLeft) && (item.offsetTop == food.offsetTop)) {
      var item = document.createElement("div")
      item.id = "body"
      item.style.top = food.offsetTop + "px"
      item.style.left = food.offsetLeft + "px"
      this.map.map.appendChild(item)
      this.snake.getSnakeList.push(item)
      this.food.setFood()
    }
  }
}

const restart = document.getElementById("restart") as HTMLButtonElement
restart.addEventListener('click', () => {
  location.reload()
})

const main = new Main()

main.run()















