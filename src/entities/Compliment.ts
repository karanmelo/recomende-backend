import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";

import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {

  @PrimaryColumn()
  readonly id: string;

  @JoinColumn({ name: "user_sender" })
  @ManyToOne(() => User)
  sender: User;

  @Column()
  user_sender: string;

  @JoinColumn({ name: "user_receiver" })
  @ManyToOne(() => User)
  receiver: User;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: "tag_id" })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  tag_id: string;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Compliment };