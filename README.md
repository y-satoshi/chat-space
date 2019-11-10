# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin19]

* System dependencies

* Configuration

* Database creation

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,index: true|
|email|string|null: false|
|password|string|null: false, password.match(/[a-z\d]{8,}/i)|


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false|
|group_id|integer|null: false|
### Association
- belongs_to :group
- has_many :users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|text|string|
|image|string|


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
