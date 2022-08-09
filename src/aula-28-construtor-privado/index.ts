// singleton
export class Database {
    private static instance: Database;
    private connected = false;

    private constructor(
        private host: string,
        private user: string,
        private password: string,
    ) {}

    connect() {
        if (this.connected) {
            console.log('Já conectado!');
            return;
        }

        console.log(`Conectando em ${this.host}:${this.user}`);
        this.connected = true;
    }

    // factory
    static getDatabase(host: string, user: string, password: string): Database {
        if (Database.instance) return Database.instance;
        Database.instance = new Database(host, user, password);
        return Database.instance;
    }
}

const db1 = Database.getDatabase('localhost', 'user', 'password');
db1.connect();

const db2 = Database.getDatabase('localhost', 'user', 'password');
db2.connect();

console.log(db1 === db2);
