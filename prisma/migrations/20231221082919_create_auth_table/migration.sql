-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'ADMIN', 'SUPERADMIN', 'EMPLOYEE');

-- CreateEnum
CREATE TYPE "Permissions" AS ENUM ('CREATEUSER', 'UPDATEUSER');

-- CreateTable
CREATE TABLE "Auth" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "permissions" "Permissions"[],

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("id")
);
