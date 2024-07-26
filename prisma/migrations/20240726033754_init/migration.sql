-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT,
    "name" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "platform" TEXT,
    "description" TEXT,
    "category" TEXT NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
