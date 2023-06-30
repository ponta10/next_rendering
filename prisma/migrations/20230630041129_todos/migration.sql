-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO "Todo"("id", "title") VALUES (uuid_generate_v4(), 'First Todo');
INSERT INTO "Todo"("id", "title") VALUES (uuid_generate_v4(), 'Second Todo');
INSERT INTO "Todo"("id", "title") VALUES (uuid_generate_v4(), 'Third Todo');
