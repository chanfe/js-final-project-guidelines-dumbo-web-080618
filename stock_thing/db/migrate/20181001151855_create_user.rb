class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :user do |t|
      t.string :name
      t.string :username
      t.integer :money

      t.timestamps
    end
  end
end
