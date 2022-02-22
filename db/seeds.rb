# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Article.destroy_all
Category.destroy_all

test_admin = User.create!({ email: 'test@gmail.com', password: 'hello123456', admin: true })
test_admin.save!

#categories
category1 = Category.create!({ name: 'mental health', description: "everyone's boundaries are unique", img: 'mentalhealth.png' })
category1.save!

#articles
article1 = Article.create!({ title: 'Am I having enough sex?', url: 'https://www.vogue.com/article/am-i-having-enough-sex', author: 'hannah witton', category: category1 })
article1.save!
