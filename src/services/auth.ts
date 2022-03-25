import { v4 as uuid } from 'uuid'

type signInRequestData = {
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: signInRequestData) {
    await delay(1500)

    return {
        token: uuid(),
        user: {
            name: 'Emily Inacio',
            email: 'emilymarcelino59@gmail.com',
            avatar_url: 'https://github.com/emiinacio.png'
        }
    }
}