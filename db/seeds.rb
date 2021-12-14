# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Story.destroy_all
Comment.destroy_all

story1 = Story.create!(img_url1: 'https://i.imgur.com/4WZpZvc.png', img_url2: 'https://i.imgur.com/6a2iGUR.png', img_url3: 'https://i.imgur.com/B8lrATl.png', img_url4: 'https://i.imgur.com/8mFVGny.png', img_url5: 'https://i.imgur.com/Wkh0dnu.png', title: 'A goodbye, a growing boycott, & more - quick cards for December 9 🌊' )
story2 = Story.create!(img_url1: 'https://i.imgur.com/gRF7hk3.png', img_url2: 'https://i.imgur.com/1Ri3Pj2.png', img_url3: 'https://i.imgur.com/F1WhZzm.png', img_url4: 'https://i.imgur.com/C7B5yL0.png', img_url5: 'https://i.imgur.com/Z2ueyFN.png', title: 'A potential US Olympic boycott, missile tests, & more - quick cards for November 19 🌊')
story3 = Story.create!(img_url1: 'https://i.imgur.com/3riUMYp.png', img_url2: 'https://i.imgur.com/9Q2qh2S.png', img_url3: 'https://i.imgur.com/tGzVbLC.png', img_url4: 'https://i.imgur.com/0xlY4dI.png', img_url5: 'https://i.imgur.com/hN0nQBI.png', title: 'Deft dinosaurs, tornadoes, inflation, & more - quick cards for December 13 🌊')
story4 = Story.create!(img_url1: 'https://i.imgur.com/40zEYly.png', img_url2: 'https://i.imgur.com/cVUXd1K.png', img_url3: 'https://i.imgur.com/5xpnnlA.png', img_url4: 'https://i.imgur.com/uqdNdOe.png', img_url5: 'https://i.imgur.com/FttJuQm.png', title: 'Fertility concerns, a tobacco ban, & more - quick cards for December 10 🌊')

comment1 = Comment.create!(name: 'paul', text: 'test', story_id: story1[:id] )
comment2 = Comment.create!(name: 'ty', text: 'hi', story_id: story2[:id] )
comment3 = Comment.create!(name: 'marquel', text: 'AHHHHH', story_id: story2[:id] )
comment4 = Comment.create!(name: 'paul', text: 'yooo', story_id: story2[:id] )
comment5 = Comment.create!(name: 'vince', text: 'hungry', story_id: story3[:id] )
comment6 = Comment.create!(name: 'rich homie ricky', text: 'yo', story_id: story4[:id] )
