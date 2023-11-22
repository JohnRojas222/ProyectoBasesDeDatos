import GenericCrud from './GenericCrud';
class LogOutCrud extends GenericCrud {
    constructor() {
        super("");
    }

    async logout() {
        return await super.logout();
    }
}

export default LogOutCrud;