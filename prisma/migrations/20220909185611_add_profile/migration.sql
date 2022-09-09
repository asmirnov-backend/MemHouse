-- CreateTable
CREATE TABLE "Profile" (
    "id" UUID NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "surname" VARCHAR(128) NOT NULL,
    "birthday" DATE NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
