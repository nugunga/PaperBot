-- CreateTable
CREATE TABLE `User` (
    `discordID` VARCHAR(191) NOT NULL,
    `accessToken` VARCHAR(191) NOT NULL,
    `refreshToken` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_discordID_key`(`discordID`),
    PRIMARY KEY (`discordID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
