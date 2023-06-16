import exp from "constants";
import { ToDoStore } from "../ToDoStore";
import { ITodoStore } from "../interfaces";
import { ITask} from "../interfaces";



describe('TodoStore',() => {

// переписать когда смержу с ветко, которая формирует id на бэке
    const task1:ITask = {
        task:'Купить',
        id: 'Купить',
        isDone: false,
    }
     const task2:ITask = {
        task:'Позвонить',
        id: 'Позвонить',
        isDone: false,
    }

    let todoStore: ITodoStore | null

    beforeEach(() => {
      todoStore = new ToDoStore()
    })

    afterEach(() => {
        todoStore = null
        jest.clearAllMocks();
    })
    describe('addTask',() => {
        it('should add in the end tasks' ,() =>{
         todoStore?.addTask(task1)
         todoStore?.addTask(task2)

        expect(todoStore?.tasks).toHaveLength(2)
        expect(todoStore?.tasks).toContainEqual(task1)
        expect(todoStore?.tasks[0]).toEqual(task1)
        expect(todoStore?.tasks[1]).toEqual(task2)

        })
    })

    describe('deleteTask' , () => {
        it('should delete task by id from array', () => {
            todoStore?.addTask(task1)
            todoStore?.addTask(task2)
            expect(todoStore?.tasks).toHaveLength(2)
            
            todoStore?.deleteTask('Купить')

            expect(todoStore?.tasks).toHaveLength(1)
            expect(todoStore?.tasks).not.toContainEqual(task1)
        })

        it('should not delete others tasks', () => {
            todoStore?.addTask(task1)
            todoStore?.addTask(task2)
            todoStore?.deleteTask('Купить')

            expect(todoStore?.tasks).toContainEqual(task2)
        })
    })

    describe('deleteAllTasks',() => {
        it('should delete all tasks from array' , () => {
            todoStore?.addTask(task1)
            todoStore?.addTask(task2)
            expect(todoStore?.tasks).toHaveLength(2)

            todoStore?.deleteAllTasks()

            expect(todoStore?.tasks).toHaveLength(0)
        })
    })

    describe('getTask', () => {
        it('should return task by id from array',() => {
            todoStore?.addTask(task1)
            todoStore?.addTask(task2)

            expect(todoStore?.getTask('Позвонить')).toEqual(task2)

        })

        it('should not mutate array tasks', () => {
            todoStore?.addTask(task1)
            todoStore?.addTask(task2)

            expect(todoStore?.tasks).toHaveLength(2)
            todoStore?.getTask('Позвонить')

            expect(todoStore?.tasks).toHaveLength(2)
        })
    })

    describe('switchIsDoneTask', () => {
        it('should switch isDone in task by ID',() => {
            todoStore?.addTask(task1)
            todoStore?.addTask(task2)

            todoStore?.switchIsDoneTask('Купить')

            const modifiedTask = todoStore?.getTask('Купить')

            expect(modifiedTask?.isDone).toBeTruthy()

            todoStore?.switchIsDoneTask('Купить')

            expect(modifiedTask?.isDone).not.toBeTruthy()

        })

        it('should not modify other task, only target task by ID',() => {
            todoStore?.addTask(task1)
            todoStore?.addTask(task2)

            todoStore?.switchIsDoneTask('Купить')
            const modifiedTask = todoStore?.getTask('Купить')
            const notModifiedTask = todoStore?.getTask('Позвонить')

            expect(modifiedTask?.isDone).toBeTruthy()
            expect(notModifiedTask?.isDone).not.toBeTruthy()

        })
    })
    describe('setTasksFromdDB',() => {
        it('should set tasks from BD' ,() => {
            todoStore?.setTasksFromdDB([task1,task2])

            expect(todoStore?.tasks).toHaveLength(2)
            expect(todoStore?.tasks).toContainEqual(task1)
            expect(todoStore?.tasks).toContainEqual(task2)
        })
    })
})
