# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Story.destroy_all
Comment.destroy_all

@admin = Story.create!(img_url1: 'https://i.imgur.com/4WZpZvc.png', img_url2: 'https://i.imgur.com/6a2iGUR.png', img_url3: 'https://i.imgur.com/B8lrATl.png', img_url4: 'https://i.imgur.com/8mFVGny.png', img_url5: 'https://i.imgur.com/Wkh0dnu.png', title: 'A goodbye, a growing boycott, & more - quick cards for December 9 🌊' )

@admin = Comment.create!(name: 'paul', text: 'test')