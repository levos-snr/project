

CREATE TABLE `mysql-next_user` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`email` varchar(256),
	`password` varchar(256),
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mysql-next_user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `mysql-next_user` (`name`);
