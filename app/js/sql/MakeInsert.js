import MakeSql from './MakeSql';

/**
 * MakeInsert
 */
export default class MakeInsert extends MakeSql {
    /**
     * sql文を生成する
     */
    make() {
        if (this.config.bulk) {
            return this.bulkSql();
        } else {
            return this.splitSql();
        }
    }

    /**
     * 全体で1つのsql文を生成する
     */
    bulkSql() {
        const {fields, values} = this.getValue();
        const fieldPhrase = `(${fields.join(', ')})`;
        const valuePhrase = values.map((row) => {
            return `(${row.split(', ')})`;
        }).join('\n,');

        return `${this.config.insert} ${this.config.into} ${this.tableName}\n${fieldPhrase}\n${this.config.values}\n${valuePhrase}\n;`;
    }

    /**
     * 1行ごとに1つのsql文を生成する
     */
    splitSql() {
        const {fields, values} = this.getValue();
        const fieldPhrase = `(${fields.join(', ')})`;

        return values.map((row) => {
            return `${this.config.insert} ${this.config.into} ${this.tableName} ${fieldPhrase} ${this.config.values} (${row.split(', ')});`;
        }).join('\n');
    }
}
