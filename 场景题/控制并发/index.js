function ajax(time, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 5000) {
                reject(name)
                return
            }
            resolve(name)
        }, time)
    })
}


class Scheduler {
    constructor(parallCount = 2) {
        this.parallCount = parallCount
        this.tasks = []
        this.runningCount = 0
    }
    add(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject
            })
            this.#run()
        })
    }
    #run() {
        if (this.runningCount < this.parallCount && this.tasks.length > 0) {
            const { task, resolve, reject } = this.tasks.shift()
            this.runningCount++
            task()
                .then(resolve, reject)
                .finally(() => {
                    this.runningCount--
                    this.#run()
                })
        }
    }
}

function addTask(time, name) {
    scheduler
        .add(() => ajax(time, name))
        .then(() => {
            console.log(`任务${name}执行完成`)
        }).catch(() => {
            console.log(`任务${name}执行超时`)
        })
}

let scheduler = new Scheduler()



addTask(10000, 1)
addTask(8000, 2)
addTask(1000, 3)
addTask(3000, 4)
addTask(4000, 5)