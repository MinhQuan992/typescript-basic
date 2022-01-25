let userInput: unknown
let userName: string

userInput = 'Max'
// Because type 'unknown' is not assignable to any other types, we can't write statement like this
// (without any checks):
// userName = userInput
if (typeof userInput === 'string') {
    userName = userInput
}

function generateError(message: string, code: number) {
    throw {
        message: message,
        errorCode: code
    }
}
generateError('An error occurred!', 500) // This function's type is never