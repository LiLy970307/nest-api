import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'int', nullable: true })
  age?: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  // @UpdateDateColumn({ type: 'timestamp' })
  // updatedAt: Date;
}
