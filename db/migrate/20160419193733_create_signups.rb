class CreateSignups < ActiveRecord::Migration
  def change
    create_table :signups do |t|
      t.belongs_to :job
      t.belongs_to :worker

      t.timestamps null: false
    end
  end
end
