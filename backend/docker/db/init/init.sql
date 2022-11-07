# create databases
CREATE DATABASE IF NOT EXISTS `enventario_local`;
CREATE DATABASE IF NOT EXISTS `enventario_test`;
GRANT ALL PRIVILEGES ON `enventario_local`.* TO 'admin'@'%';
GRANT ALL PRIVILEGES ON `enventario_test`.* TO 'admin'@'%';
