require 'faker'

100.times do
  Person.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
end
