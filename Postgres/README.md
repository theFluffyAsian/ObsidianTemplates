# Postgres 

## Introduction
This folder contains the minimal setup for a Postgres database migration system. This is a roll-forward only migration system that is based on a templated .sql file which checks a "version" table in a database and compares the current database version to the script version. If the script version = database version - 1 then the script is applied. 

This can be brittle and is not an ideal solution, but if your team does not have an out-of-the-box solution for database management (eg. Entity Framework migrations, Redgate Flyway, DbDeploy or DbGhost) then this is a good place to start. 

We used this system to improve on a project where database migrations were being carried out manually. We were using Dapper as the ORM and commercial tools were too expensive at the time. 
