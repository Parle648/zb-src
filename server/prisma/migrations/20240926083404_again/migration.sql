/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deals" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "days_left" INTEGER NOT NULL,
    "sold" INTEGER NOT NULL,
    "yield" INTEGER NOT NULL DEFAULT 0,
    "tiket_cost" INTEGER NOT NULL,
    "amount_cost" INTEGER NOT NULL,
    "background" TEXT NOT NULL,

    CONSTRAINT "Deals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Deals_title_key" ON "Deals"("title");
