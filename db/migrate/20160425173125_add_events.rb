class AddEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.belongs_to :contractor
      t.belongs_to :worker
      t.belongs_to :job
      t.timestamps null: false
    end
  end
end
