class AddProfileFinishedToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_finished, :bool, default: false
  end
end
