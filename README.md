# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
  ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin19]

* System dependencies

* Configuration

* Database creation

userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|nickname|string|null: false, foreign_key: true|
### Association
- has many :massage
- has many :group

groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

massageテーブル
|Column|Type|Options|
|------|----|-------|
|text|integer|null: false, foreign_key: true|
|image|URL|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
  Association
- belongs_to :user

groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
  Association
- has many :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
