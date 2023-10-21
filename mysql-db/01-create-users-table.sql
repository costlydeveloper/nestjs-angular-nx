USE main_db;
create table user
(
    id          varchar(36)                              not null
        primary key,
    firstName   varchar(255)                             not null,
    lastName    varchar(255)                             not null,
    isActive    tinyint     default 1                    not null,
    createdDate datetime(6) default CURRENT_TIMESTAMP(6) not null,
    updatedDate datetime(6) default CURRENT_TIMESTAMP(6) not null on update CURRENT_TIMESTAMP(6),
    password    varchar(255)                             not null,
    username    varchar(255)                             not null
);
