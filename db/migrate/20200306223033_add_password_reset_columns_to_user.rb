class AddPasswordResetColumnsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :reset_password_token, :string
    add_column :users, :reset_password_sent_at, :datetime
    add_column :users, :address, :string
    add_column :users, :name, :string
    add_column :users, :phone_no, :string
  end
end
