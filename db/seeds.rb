
@completeArr = [true, false]

Todo.delete_all

5.times do 
  Todo.create(
    title: Faker::CryptoCoin.coin_name,
    desc: Faker::Lorem.paragraph,
    complete: @completeArr.sample
  )
end