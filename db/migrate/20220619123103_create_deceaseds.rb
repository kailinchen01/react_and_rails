class CreateDeceaseds < ActiveRecord::Migration[6.0]
  def change
    create_table :deceaseds do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.date :date_of_birth
      t.string :hair_length
      t.string :hair_color
      t.string :skin_color
      t.string :description
      t.string :date_found

      t.timestamps
    end
  end
end
