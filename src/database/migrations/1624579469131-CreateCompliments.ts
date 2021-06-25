import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624579469131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid"
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_UserSender",
                        columnNames: ["user_sender"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_UserReceiver",
                        columnNames: ["user_receiver"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_Tag",
                        columnNames: ["tag_id"],
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
