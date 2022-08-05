type VerifyUser = (user: User, sendedValue: User) => boolean;

type User = {
    username: string;
    password: string;
};

const verifyUser: VerifyUser = (user: User, sendedValue: User) => {
    return (
        user.username === sendedValue.username &&
        user.password === sendedValue.password
    );
};

const dataUser = { username: 'username', password: 'passwd' };
const sendedUser = { username: 'username', password: 'passwd' };

console.log(verifyUser(dataUser, sendedUser));
