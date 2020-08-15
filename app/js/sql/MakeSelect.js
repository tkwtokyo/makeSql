import Makesql from './Makesql';

/**
 * MakeSelect
 */
export default class MakeSelect extends Makesql {
    make() {
        if (this.config.bulk) {
            return this.bulkSql();
        } else {
            return this.splitSql();
        }
    }

    /**
     * 1行ごとに1つのsqlを生成する
     */
    splitSql() {
        return this.where().map((where) => {
            return `${this.config.select} * ${this.config.from} ${this.tableName} ${this.config.where} ${where};`;
        }).join('\n');
    }

    /**
     * 全体で1つのsql文を生成する
     */
    bulkSql() {
        const where = this.bulk(this.where());

        return `${this.config.select} *\n${this.config.from} ${this.tableName}\n${this.config.where}\n${where}\n;`;
    }
}
