# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.delete_all
Post.delete_all

5.times do |index|
  p = Post.new({
    title: Faker::Pokemon.location,
    author: Faker::App.author,
    body: Faker::Lorem.paragraph
    })
  p.save

  2.times do |index|
    a = p.comments.create({
      author: Faker::GameOfThrones.character,
      body: Faker::Lorem.sentence,
      vote: Faker::Number.digit
    });
  end

end