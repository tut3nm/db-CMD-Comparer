SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `userpass` VARCHAR(255) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `birthday` DATE NULL,
  `permissions` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`brand` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `devices` INT NULL DEFAULT 0,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_brand_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_brand_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`phone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`phone` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(45) NOT NULL,
  `code` VARCHAR(45) NULL,
  `age` INT NULL,
  `release_date` DATE NULL,
  `brand_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_phone_brand_idx` (`brand_id` ASC),
  CONSTRAINT `fk_phone_brand`
    FOREIGN KEY (`brand_id`)
    REFERENCES `mydb`.`brand` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`phone_specs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`phone_specs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `phone_id` INT NOT NULL,
  `cam_1` TEXT NULL,
  `cam_2` TEXT NULL,
  `cam_3` TEXT NULL,
  `cam_4` TEXT NULL,
  `cam_front` TEXT NULL,
  `chipset` TEXT NULL,
  `display_tec` VARCHAR(10) NULL,
  `display_ppp` INT NULL,
  `display_inch` FLOAT NULL,
  `display_freq` INT NULL,
  `batery` INT NULL,
  `charge` INT NULL,
  `os` VARCHAR(20) NULL,
  `ram` INT NULL,
  `storage` INT NULL,
  `dimensions` VARCHAR(45) NULL,
  `weight` INT NULL,
  `video_specs` TEXT NULL,
  `has_5g` TINYINT(1) NULL DEFAULT 0,
  `calification` FLOAT NULL,
  `cal_pri_qua` FLOAT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_phone_specs_phone1_idx` (`phone_id` ASC),
  CONSTRAINT `fk_phone_specs_phone1`
    FOREIGN KEY (`phone_id`)
    REFERENCES `mydb`.`phone` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`watch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`watch` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(45) NOT NULL,
  `code` VARCHAR(45) NULL,
  `age` INT NULL,
  `release_date` DATE NULL,
  `brand_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_watch_brand1_idx` (`brand_id` ASC),
  CONSTRAINT `fk_watch_brand1`
    FOREIGN KEY (`brand_id`)
    REFERENCES `mydb`.`brand` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`watch_specs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`watch_specs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `watch_id` INT NOT NULL,
  `chipset` TEXT NULL,
  `display_tec` VARCHAR(10) NULL,
  `display_ppp` INT NULL,
  `display_inch` FLOAT NULL,
  `batery` INT NULL,
  `os` VARCHAR(20) NULL,
  `ram` INT NULL,
  `storage` INT NULL,
  `dimensions` VARCHAR(45) NULL,
  `weight` INT NULL,
  `has_sim` TINYINT(1) NULL DEFAULT 0,
  `calification` FLOAT NULL,
  `cal_pri_qua` FLOAT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_watch_specs_watch1_idx` (`watch_id` ASC),
  CONSTRAINT `fk_watch_specs_watch1`
    FOREIGN KEY (`watch_id`)
    REFERENCES `mydb`.`watch` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;