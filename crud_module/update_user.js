//!NodeJS Module - updateUser:
const fs = require("fs");

const updateUser = async (idUser, dataUpdate) => {
    try {
        const stringUsers = await fs.promises.readFile(
            'users.json',
            {encoding: 'utf-8'},
        );
        const usersRead = JSON.parse(stringUsers);

        const user = usersRead.find(obj => obj.id == idUser);
        const objIndex = usersRead.findIndex((obj => obj.id == idUser));
        
        usersRead[objIndex].username = dataUpdate.username;
        usersRead[objIndex].password = dataUpdate.password;

        await fs.promises.writeFile('users.json',JSON.stringify(usersRead));
        
        console.log(user);
        console.log(usersRead);
        return usersRead;

    } catch (err){
        console.log(err);
        throw err;
    }
}

module.exports = updateUser;