import { UserStore } from "../UserStore";
import { IUserStore } from "../interfaces.ts";
import { IFormAuth } from "features/auth/interfaces";


describe('UserStore' , () => {
    const userMock : IFormAuth = {
        email : 'email@email.com',
        country:'World',
        nickname:'Frontend',
        password:'Password123',
        _id:'id12321id'
    }

    let userStore : UserStore | null

    beforeEach(() => {
        userStore = new UserStore()
    })

    afterEach(() => {
        userStore = null
    })

    describe('setUserFromDB', () => {
       it('should add data about user',() => {
        userStore?.setUserFromDB(userMock)

        expect(userStore?.user).toEqual(userMock)
       })
    })

    describe('setIsAuth', () => {
        it('should set status isAuth' , () => {
            userStore?.setIsAuth(true)

            expect(userStore?.isAuth).toBeTruthy()

            userStore?.setIsAuth(false)
            expect(userStore?.isAuth).not.toBeTruthy()

        })
    })
    describe('getter idUser', () => {
        it('should return ids user', () => {
            userStore?.setUserFromDB(userMock)

            expect(userStore?.idUser).toEqual('id12321id')
        })
    })
})
